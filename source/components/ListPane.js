import { h, Component } from "preact";
import ListHeader from "./ListHeader.js";
import ListView from "./ListView.js";


const ListPane = props => {
	const headerHeight = 38;
	const listWidth = props.frame.size.width;
	const paneHeight = props.frame.size.height;
	const contentHeight = paneHeight - headerHeight;
	const headerFrame = {origin:{x:0,y:0},size:{width:listWidth,height:headerHeight}};
	const viewFrame = {origin:{x:0,y:headerHeight},size:{width:listWidth,height:contentHeight}};
	const listClipStyle = {
		width: listWidth + "px",
		height:paneHeight + "px",
		overflow:"auto"
	};
	const listContentStyle = {
		position:"relative",
		zIndex:1,
		width:"100%",
		height:contentHeight + "px",
		top:headerHeight + "px"
	};
	const clipProps = {
		key: "ListClip",
		className : "clip",
		style : listClipStyle
	};
	const headerProps = {
		key: "ListHeader",
		frame: headerFrame
	};
	const viewProps = {
		dimension: 20,
		inset: 7,
		margin: 15,
		key: "ListContent",
		style: listContentStyle,
		frame: viewFrame
	};
	return (
		<div {...clipProps}>
			<ListHeader {...headerProps} />
			<ListView {...viewProps} />
		</div>
	);
}

export default ListPane;