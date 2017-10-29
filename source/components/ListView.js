import { h, Component } from "preact";
//import { connect } from "preact-redux";
import { connect } from "react-redux";
import * as actions from "../actions.js";
import * as selectors from "../selectors.js";
import ListRow from "./ListRow.js";
//import ListLayout from "./ListLayout.js";


const ListView = class extends Component {
	shouldComponentUpdate(props) {
		return !props.inLiveResize;//draggingDivider;
	}
	render() {
		const props = this.props;
		//const layoutManager = new ListLayout(props);
		const style = {
			backgroundColor:"white",
			paddingLeft:"7px"
		};

		const children = props.exposedIds.map( (id, index) => {
			//const childProps = layoutManager.propsOfItemAtIndex(index);
			const childNode = props.normalizedTreeDict[id];
			const collapsed = (props.collapsedIds.indexOf(id) > -1);
			const childProps = {
				node: childNode,
				height: props.dimension,
				disclosureToggle: props.disclosureToggle,
				depth: props.flattenedDepth[id],
				collapsed,
				id,
				key:id
			};
			const childIds = childNode.childIds;
			let childNodes = [];
			if (childIds) childNodes = childIds.map( sub => {
				return props.normalizedTreeDict[sub];
			});
			let choiceNodes = [];
			const choiceIds = childNode.choiceIds;
			if (choiceIds) choiceNodes = choiceIds.map( sub => {
				return props.normalizedTreeDict[sub];
			});
			return (
				<ListRow {...childProps} childNodes={childNodes} choiceNodes={choiceNodes} changeSetting={this.props.changeSetting} />
			);
		});

		return (
			<div style={style}>
				{children}
			</div>
		);
	}
};

function mapStateToProps(state, ownProps) {
	return Object.assign({}, state, ownProps, {
		inLiveResize: state.draggingDivider,
		exposedIds: selectors.exposedIdsSelector(state),
		normalizedTreeDict: selectors.normalizedTreeDictSelector(state),
		flattenedIds: selectors.flattenedIdsSelector(state),
		flattenedDepth: selectors.flattenedDepthSelector(state),
		collapsedIds: selectors.collapsedIdsSelector(state),
		shiftKeyPressed: state.shiftKeyPressed,
		editingId: state.now.editingId
	});
}
const ConnectedListView = connect(mapStateToProps, actions)(ListView);
export default ConnectedListView;