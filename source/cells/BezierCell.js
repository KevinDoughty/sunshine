import { h, Component } from "preact";
const bezier = require("bezier");
const cubic = require("bezier").prepare(4);


const BezierCell = (class extends Component {
	constructor(props) {
		super(props);
		this.element = null;
		this.mouseDown = this.mouseDown.bind(this);
		this.mouseMove = this.mouseMove.bind(this);
		this.mouseUp = this.mouseUp.bind(this);
		this.refCallback = this.refCallback.bind(this);
		this.dimension = 100;
		this.dragging = 0;
		this.rect = null;
	}
	mouseMove(e) {
		this.handleMouseChange(e, true);
	}
	handleMouseChange(e, continuous) {
		const dimension = this.dimension;
		const rect = this.rect;
		const x = e.clientX - rect.left;
		const y = dimension - (e.clientY - rect.top);
		const dragging = this.dragging;
		const changeSetting = this.props.changeSetting;
		const variables = this.props.node.choiceIds;
		if (dragging === 1) {
			changeSetting([variables[0], variables[1]], [x/dimension, y/dimension], { continuous })
		} else if (dragging === 2) {
			changeSetting([variables[2], variables[3]], [x/dimension, y/dimension], { continuous })
		}
	}
	mouseUp(e) {
		this.handleMouseChange(e, false); // Needed to update query string, suppressed on mouseMove. Can't update 100 times in 30 seconds or Safari will throw an error
		document.removeEventListener("mousemove",this.mouseMove);
		document.removeEventListener("mouseup",this.mouseUp);
		this.dragging = 0;
	}
	mouseDown(e) {
		const threshold = 15;
		const element = this.element;
		const dimension = this.dimension;
		const rect = element.getBoundingClientRect();
		this.rect = rect;
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const x0 = this.props.value[0] * dimension;
		const y0 = dimension - this.props.value[1] * dimension;
		const x1 = this.props.value[2] * dimension;
		const y1 = dimension - this.props.value[3] * dimension;
		if (Math.abs(x - x0) < threshold && Math.abs(y - y0) < threshold) {
			this.dragging = 1;
		} else if (Math.abs(x - x1) < threshold && Math.abs(y - y1) < threshold) {
			this.dragging = 2;
		}
		if (this.dragging) {
			document.addEventListener("mousemove",this.mouseMove);
			document.addEventListener("mouseup",this.mouseUp);
		}
	}
	componentDidUpdate() {
		this.draw();
	}
	refCallback(element) {
		if (this.element === null) {
			this.element = element;
			element.width = this.dimension;
			element.height = this.dimension;
			this.draw();
		}
	}
	draw() {
		const canvas = this.element;
		if (!canvas) return;
		const context = canvas.getContext("2d");
		const childNodes = this.props.node.childNodes;
		const dimension = this.dimension;
		const R = dimension;
		const x0 = this.props.value[0];
		const y0 = this.props.value[1];
		const x1 = this.props.value[2];
		const y1 = this.props.value[3];
		const x = [0, x0, x1, 1];
		const y = [0, y0, y1, 1];
		const width = dimension;
		const height = dimension;
		canvas.width = width;
		canvas.height = height;
		context.clearRect(0, 0, width, height);
		context.beginPath();
		for (let t=0; t<1; t += 0.01) {
			const X = cubic(x, t) * R;
			const Y = cubic(y, t) * R;
			context.lineTo(X, dimension-Y);
		}
		context.moveTo(0,dimension-0);
		context.lineTo(x0*R,dimension-y0*R);
		context.moveTo(R,dimension-R);
		context.lineTo(x1*R,dimension-y1*R);
		context.stroke();
		context.closePath();
	}
	render() {
		const canvasProps = {
			ref: this.refCallback,
			onMouseDown: this.mouseDown,
			style: {
				width: "100px",
				height: "100px",
				position:"relative"
			}
		}
		const canvas = (
			<canvas {...canvasProps} />
		);
		return canvas;
	}
});
export default BezierCell;
