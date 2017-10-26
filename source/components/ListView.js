import { h, Component } from "preact";
//import { connect } from "preact-redux";
import { connect } from "react-redux";
import * as actions from "../actions.js";
import * as selectors from "../selectors.js";
import ListRow from "./ListRow.js";
import ListLayout from "./ListLayout.js";


const ListView = class extends Component {
	shouldComponentUpdate(props) {
		const keys = Object.keys(this.props);
		let i = keys.length;
		while (i--) {
			const key = keys[i];
			if (key === "frame") { // don't update on width change
				if (props.frame.origin.x !== this.props.frame.origin.x) return true;
				if (props.frame.origin.y !== this.props.frame.origin.y) return true;
				if (props.frame.size.height !== this.props.frame.size.height) return true;
			} else if (props[key] !== this.props[key]) return true;
		};
		return false;
	}
	render() {
		const props = this.props;
		const layoutManager = new ListLayout(props);
		const style = {
			backgroundColor:"white"
		};

		const children = props.exposedIds.map( (id, index) => {
			const childProps = layoutManager.propsOfItemAtIndex(index);
			
			const childNode = props.normalizedTreeDict[id];
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
	//const state = outerState.main;
	return Object.assign({}, ownProps, {
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