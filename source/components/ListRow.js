import { h, Component } from "preact";
import DisclosureTriangle from "./DisclosureTriangle.js";
import BoolCell from "../cells/BoolCell.js";
import FloatCell from "../cells/FloatCell.js";
import IntCell from "../cells/IntCell.js";
import LengthCell from "../cells/LengthCell.js";
import ListCell from "../cells/ListCell.js";
import TextCell from "../cells/TextCell.js";
import LabelCell from "../cells/LabelCell.js";
import BezierCell from "../cells/BezierCell.js";
import ArrayCell from "../cells/ArrayCell.js";

function cellFromNode(node) {
	const type = node.type;

	switch (type) {
		case "bool":
			return BoolCell;
		case "float":
			return FloatCell;
		case "group":
			return LabelCell;
		case "int":
			return IntCell;
		case "length":
			return LengthCell;
		case "list":
			return ListCell;
		case "text":
			return TextCell;
		case "label":
			return LabelCell;
		case "bezier":
			return BezierCell;
	}
	return LabelCell;
}

const ListRow = (class extends Component {

	constructor(props) {
		super(props);
		this.handleCheckClick = this.handleCheckClick.bind(this);
	}

	handleCheckClick(e) {
		e.stopPropagation(); // prevent selecting text with shiftKeyPressed
		e.preventDefault(); // prevent selecting text with shiftKeyPressed
		this.props.disclosureToggle(this.props.id);
	}

	render() {
		const { id, collapsed, editing, shiftKeyPressed } = this.props;
		const node = this.props.node;
		if (!node) throw new Error("no node");
		const childIds = node.childIds;

		const inset = 0;
		const margin = 15;
		const depth = this.props.depth;
		const padding = inset + (depth - 1) * margin;
		//const left = inset + depth * margin;

		//let height = this.props.frame.size.height;
		let height = this.props.height;
		if (node.type === "bezier") height = 100; // ugh

		const style = Object.assign({
			position:"relative",
			boxSizing: "border-box",
			paddingLeft: padding + "px",
			opacity: this.props.opacity,
			zIndex: this.props.zIndex,
			//left: left + "px",
			width: "100%",
			height: height + "px",
			whiteSpace: "nowrap",
		}, this.props.style);


// 		const letters = "0123456789ABCDEF";
// 		let debugColor = "#";
// 		for (let i=0; i<6; i++) {
// 			debugColor += letters[Math.floor(Math.random() * 16)];
// 		}
// 		style.backgroundColor = debugColor;


		const nodeId = id;

		if (editing) {
			style.overflow = "visible";
		}

		const itemProps = {
			style: style,
			className: "listRow"
		};
		
		const children = [];
		if (node.type === "group") {
			const labelCell = (
				<LabelCell node={node} />
			);
			children.push(labelCell);
		} else if (node.type === "bezier") {

			const childNodes = this.props.choiceNodes;
			const value = childNodes.map( node => node.value );
			const bezierCell = (
				<BezierCell {...this.props} node={node} value={value} />
			);
			children.push(bezierCell);
		} else if (node.type === "array") {
			if (node.name) {
				const labelProps = { node:{ value: node.name } };
				const labelCell = (
					<LabelCell {...labelProps} />
				);
				children.push(labelCell);
			}
			const arrayCell = (
				<ArrayCell {...this.props} node={node} childNodes={this.props.choiceNodes} />
			);
			children.push(arrayCell);
		} else {
			if (node.name) {
				const labelProps = { node:{ value: node.name } };
				const labelCell = (
					<LabelCell {...labelProps} />
				);
				children.push(labelCell);
			}
			const cell = cellFromNode(node);
			const result = Object.assign({},this.props,node,{ node:node });
			const rowElement = h(cell, result);
			children.push(rowElement);
		}

		if (!childIds || !childIds.length) return (
			<div {...itemProps}>
				{children}
			</div>
		);
		const checkProps = {
			type : "checkbox",
			id : nodeId,
			name : nodeId,
			checked : collapsed,
			onClick: this.handleCheckClick,
			style: {
				position:"absolute",
				zIndex: 1,
				cursor: "pointer",
				opacity:0,
				width:"16px",
				height:"20px",
				backgroundColor:"orange",
				top:"-6px",
				//marginLeft:"-5px"
				//left:"2px"
			}
		};
		const disclosureProps = {
			id: nodeId,
			collapsed: collapsed
		};
		return (
			<div {...itemProps}>
				<input {...checkProps} />
				<DisclosureTriangle {...disclosureProps} />
				{children}
			</div>
		);
	}
});
export default ListRow;