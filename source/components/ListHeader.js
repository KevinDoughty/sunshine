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
		//lgp.fileWriter(this.props.fileName+".stl", serializeStl( {
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
				<button onClick={this.handleStlClick} >stl</button>
				<button onClick={this.handleObjClick} >obj</button>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return Object.assign({}, ownProps, {
		mesh: plot.meshSelector(state),
		history: state.history
	});
}
const ConnectedListHeader = connect(mapStateToProps, actions)(ListHeader);
export default ConnectedListHeader;





// function serializeStl( input ) { // TODO: move or fix
// 	if( input.constructor === Array ) {
// 		var output = "";
// 		for( var i = 0; i < input.length; i++ ) {
// 			output += serializeStlPrivate( input[ 0 ], i );
// 		}
// 		return output;
// 	}
// 	else {
// 		return serializeStlPrivate( input, 0 );
// 	}
// }
// 
// function compatibleNumber(num) {
// 	return num;
// }
// 
// function serializeStlPrivate( input, index ) {
// 	if( input.positions === undefined || input.cells === undefined ) {
// 		throw "Input Not Valid: Does not contain any positions or cells";
// 	}
// 	var name = "";
// 	var cells;
// 	if (input.cells[ 0 ].constructor === Array) {
// 		cells = normalize( input.cells );
// 	} else {
// 		cells = input.cells;
// 	}
// 	var positions = input.positions;
// 	if (typeof input.positions[0] === Array || typeof input.positions[0] === Float32Array) { // eslint-disable-line no-undef
// 		positions = normalize( input.positions );
// 	}
// 
// 	var normals = undefined;
// 	if( input.normals !== undefined ) {
// 		normals = input.normals[0].constructor === Array ? normalize( input.normals ) : input.normals;
// 	} else {
// 		normals = calculateNormals( positions, cells );
// 	}
// 	var i0, i1, i2;//, a, b, c;
// 	var stl = "solid " + name + "\n";
// 	for( var i = 0; i < cells.length; i += 3 ) {
// 		i0 = cells[ i ] * 3;
// 		i1 = cells[ i + 1 ] * 3;
// 		i2 = cells[ i + 2 ] * 3;
// 
// 		if (Number.isNaN(normals[i])) {
// 			normals[i] = 0;
// 		}
// 		if (Number.isNaN(normals[i+1])) {
// 			normals[i+1] = 0;
// 		}
// 		if (Number.isNaN(normals[i+2])) {
// 			normals[i+2] = 0;
// 		}
// 		
// 		stl += "  facet normal " + compatibleNumber(normals[ i ]) + " " + compatibleNumber(normals[ i + 1 ]) + " " + compatibleNumber(normals[ i + 2 ]) + "\n";
// 		stl += "	outer loop\n";
// 		stl += "	  vertex" + " " + compatibleNumber(positions[ i0 ]) + " " + compatibleNumber(positions[ i0 + 1 ]) + " " + compatibleNumber(positions[ i0 + 2 ]) + "\n";
// 		stl += "	  vertex" + " " + compatibleNumber(positions[ i1 ]) + " " + compatibleNumber(positions[ i1 + 1 ]) + " " + compatibleNumber(positions[ i1 + 2 ]) + "\n";
// 		stl += "	  vertex" + " " + compatibleNumber(positions[ i2 ]) + " " + compatibleNumber(positions[ i2 + 1 ]) + " " +compatibleNumber(positions[ i2 + 2 ]) + "\n";
// 		stl += "	endloop\n";
// 		stl += "  endfacet\n";
// 	}
// 	stl += ("endsolid\n");
// 	return stl;
// }
