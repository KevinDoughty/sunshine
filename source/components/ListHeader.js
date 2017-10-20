import { h, Component } from "preact";
import { connect } from "preact-redux";
import * as actions from "../actions.js";
import * as plot from "../plot.js";

const normalize = require("guf").normalizeArray;
const calculateNormals = require("guf").faceNormals;
const lgp = require("lgp");

class ListHeader extends Component {
	constructor(props) {
		super(props);
		this.handleUndoClick = this.handleUndoClick.bind(this);
		this.handleRedoClick = this.handleRedoClick.bind(this);
		this.handleStlClick = this.handleStlClick.bind(this);
		this.handleObjClick = this.handleObjClick.bind(this);
	}

	handleUndoClick(e) {
		this.props.undo();
	}

	handleRedoClick(e) {
		this.props.redo();
	}

	handleStlClick(e) {
		const mesh = this.props.mesh;
		lgp.fileWriter(this.props.fileName+".stl", lgp.stlSerializer( {
			positions: mesh.positions,
			cells: mesh.cells
		}));
	}
	
	handleObjClick(e) {
		const mesh = this.props.mesh;
		lgp.fileWriter(this.props.fileName+".obj", lgp.objSerializer( {
			positions: mesh.positions,
			cells: mesh.cells
		}));
	}

	render(props,state) {
		const style = {
			width: "100%",
			whiteSpace: "nowrap"
		}
		return (
			<div style={style} >
				<button onClick={this.handleUndoClick} disabled={this.props.history.past.length === 0} >undo</button>
				<button onClick={this.handleRedoClick} disabled={this.props.history.future.length === 0} >redo</button>
				<button onClick={this.handleStlClick} disabled={this.props.debugging === true} >stl</button>
				<button onClick={this.handleObjClick} disabled={this.props.debugging === true} >obj</button>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return Object.assign({}, ownProps, {
		mesh: plot.meshSelector(state),
		debugging: plot.debuggingSelector(state),
		history: state.history
	});
}
const ConnectedListHeader = connect(mapStateToProps, actions)(ListHeader);
export default ConnectedListHeader;