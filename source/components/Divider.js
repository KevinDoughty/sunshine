import { h, Component } from "preact";

const Divider = (class extends Component {
	constructor(props) {
		super(props);
		this.element = null;
		this.mouseDown = this.mouseDown.bind(this);
		this.mouseMove = this.mouseMove.bind(this);
		this.mouseUp = this.mouseUp.bind(this);
		this.elementDidMount = this.elementDidMount.bind(this);
	}
	componentWillUnmount() {
		this.element.removeEventListener("mousedown",this.mouseDown);
	}
	mouseDown(e) {
		e.preventDefault();
		e.stopPropagation();
		this.props.setDraggingDivider(true);
		document.addEventListener("mousemove",this.mouseMove,false);
		document.addEventListener("mouseup",this.mouseUp,false);
	}
	mouseMove(e) {
		e.preventDefault();
		e.stopPropagation();
		this.props.resizeDivider(e);
	}
	mouseUp(e) {
		e.preventDefault();
		e.stopPropagation();
		document.removeEventListener("mousemove",this.mouseMove);
		document.removeEventListener("mouseup",this.mouseUp);
		this.props.setDraggingDivider(false);
	}
	elementDidMount(element) {
		if (!this.element) {
			this.element = element;
			element.addEventListener("mousedown",this.mouseDown,false);
		}
	}
	render() {

		const frame = this.props.frame;
		const style = {
			position:"absolute",
			left:frame.origin.x+"px",
			top:frame.origin.y+"px",
			width:frame.size.width+"px",
			height:frame.size.height+"px",
			cursor:this.props.cursor,
			background:"lightgray",
			zIndex:1
		};

// 		const drawLine = false;
// 		if (drawLine) {
// 			const half = (frame.size.width-1)/2;
// 			style.borderLeft = half+"px solid rgba(255, 255, 0, 0)";
// 			style.borderRight = half+"px solid rgba(255, 255, 0, 0)";
// 			style.backgroundColor = "lightgray";
// 			style.boxSizing = "border-box";
// 			style.backgroundClip = "padding-box";
// 			style.WebkitBoxSizing = "border-box";
// 			style.WebkitBackgroundClip = "padding";
// 		}
		const props = {
			key : "divider",
			className : "divider",
			style : style,
			ref: this.elementDidMount
		};
		return (
			<div {...props} />
		);
	}
});
export default Divider;