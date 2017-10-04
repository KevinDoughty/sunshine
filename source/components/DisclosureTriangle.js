import { h, Component } from "preact";


const DisclosureTriangle = props => {
	var collapsed = props.collapsed;
	var color = "darkgray";
	var style = {
		position: "relative",
		marginTop: "5px",
		marginBottom: "-10px",
		borderStyle: "solid",
		borderWidth: "10px 5px 0 5px",
		borderColor: color + " transparent transparent transparent",
		width: "0px",
		height: "0px"
	};
	if (collapsed) {
		style.borderWidth = "5px 0 5px 10px";
		style.borderColor = "transparent transparent transparent " + color;
	}
	return (
		<div style={style} />
	);
}

export default DisclosureTriangle;