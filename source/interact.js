import { h, Component, render } from "preact";
//import { bind } from "decko";

import { connect } from "preact-redux";
import * as actions from "./actions.js";

import Primary from "./primary.js";

import { startTrackball, rollToTrackball, addToRotationTrackball } from "./trackball.js";
const keyPressed = require("key-pressed");

class Interact extends Component {
	constructor(props) {
		super(props);
		this.element = null;
		this.refCallback = this.refCallback.bind(this);
		this.keyPress = this.keyPress.bind(this);
		this.keyDown = this.keyDown.bind(this);
		this.mouseDown = this.mouseDown.bind(this);
		this.mouseDrag = this.mouseDrag.bind(this);
		this.mouseUp = this.mouseUp.bind(this);
		this.scrollWheel = this.scrollWheel.bind(this);
		this.gDollyPanStartPoint = [0,0];
		this.gTrackBallRotation = [0,0,0,0];
		this.state = {
			gTrackball: false,
			gPan: false,
			gDollyPanStartPoint:[0,0],
			gTrackBallRotation:[0,0,0,0],
		};
	}


	componentWillUnmount() {
		window.removeEventListener( "keypress", this.keyPress);
		window.removeEventListener( "keydown", this.keyDown);
		this.element.removeEventListener("mousedown", this.mouseDown);
		this.element.removeEventListener("wheel", this.scrollWheel);
	}

	keyPress(e) {
		if (e.keyCode === 27) this.props.resetWorldRotationAndCameraOrientation();
	}

	keyDown(event) {
		if (keyPressed("S")) {
			lgp.fileWriter("ycam_tutorial.stl", serializeStl( {
				positions: mesh.positions,
				cells: mesh.cells
			}));

		} else if (keyPressed("O")) {
			lgp.fileWriter("ycam_tutorial.obj", lgp.objSerializer( {
				positions: mesh.positions,
				cells: mesh.cells
			}));
		}
	}

	convertWindowToViewCoordinates(x,y) {
		const originX = this.props.frame.origin.x;
		const originY = this.props.frame.origin.y;
		return [x - originX, y - originY];
	}

	mouseDown(e) {
		e.stopPropagation();
		e.preventDefault();
		document.addEventListener("mousemove",this.mouseDrag,false);
		document.addEventListener("mouseup",this.mouseUp,false);
		const point = this.convertWindowToViewCoordinates(e.clientX,e.clientY);
		if (e.shiftKey || e.altKey) { // pan
			const result = {};
			if (this.state.gTrackball) { // if we are currently tracking, end trackball

				if (gTrackBallRotationA !== 0.0) {
					console.log("how did this work trackball:",gTrackBallRotation);
					console.log("how did this work world:",worldRotation);
					addToRotationTrackball(this.state.gTrackBallRotation.slice(0), this.state.worldRotation.slice(0));
				}
				result.gTrackBallRotation = [0,0,0,0];
			}
			result.gPan = true; 
			result.gTrackball = false; // no trackball

			this.gDollyPanStartPoint = point;

			this.setState(result);

		} else {
			const result = {};
			result.gPan = false; // no pan
			result.gTrackball = true;

			const viewWidth = this.props.frame.size.width;
			const viewHeight = this.props.frame.size.height;
			startTrackball(point[0],point[1], 0, 0, viewWidth, viewHeight);
			this.setState(result);

		}
	}

	mouseUp(e) {
		document.removeEventListener("mouseup",this.mouseUp);
		document.removeEventListener("mousemove",this.mouseDrag);
		if (this.state.gPan) {
			const result = {};
			result.gPan = false;
			this.setState(result);
		} else if (this.state.gTrackball) {
			const result = {};
			result.gTrackball = false;
			const state = this.state;
			const gTrackBallRotation = state.gTrackBallRotation.slice(0);
			const worldRotation = this.props.now.worldRotation.slice(0);
			if (gTrackBallRotation[0] !== 0.0) addToRotationTrackball(gTrackBallRotation, worldRotation);
			result.gTrackBallRotation = [0,0,0,0];
			this.props.changeWorldRotation(worldRotation.slice(0));
			this.setState(result);
		}
	}


	mouseDrag(e) {
		const state = this.state;
		const point = this.convertWindowToViewCoordinates(e.clientX,e.clientY);
		if (state.gTrackball) {
			const gTrackBallRotation = state.gTrackBallRotation.slice(0);
			rollToTrackball(point[0],point[1], gTrackBallRotation); 
			const result = {};
			result.gTrackBallRotation = gTrackBallRotation.slice(0);
			this.setState(result);

		} else if (state.gPan) {
			const result = {};
			const x = point[0];
			const y = point[1];
			const state = this.state;
			const camera = this.props.now.cameraOrientation;
			const cameraX = camera[0];
			const cameraY = camera[1];
			const cameraZ = camera[2];
			
			const gDollyPanStartPointX = this.gDollyPanStartPoint[0];
			const gDollyPanStartPointY = this.gDollyPanStartPoint[1];
			
			const panX = (gDollyPanStartPointX - x) / (900.0 / -cameraZ);
			const panY = (gDollyPanStartPointY - y) / (900.0 / -cameraZ);

			this.gDollyPanStartPoint = [x,y];
			this.props.changeCameraOrientation([cameraX - panX, cameraY - panY, cameraZ]);
		}
	}

	scrollWheel(e) {
		const state = this.state;
		const result = {};
		
		const camera = this.props.now.cameraOrientation;
		const oldZ = camera[2];
		let newZ = oldZ - e.deltaY / 3.0;
		if (newZ < -300) newZ = -300;
		if (newZ > 40) newZ = 40;
		
		this.props.changeCameraOrientation([camera[0], camera[1], newZ]);
	}

	refCallback(element) {
		if (this.element !== null) return;
		this.element = element;
		window.addEventListener( "keypress", this.keyPress);
		window.addEventListener( "keydown", this.keyDown, false);
		this.element.addEventListener("mousedown", this.mouseDown, false);
		this.element.addEventListener("wheel", this.scrollWheel, false);
	}

	render(props,state) {
		const style = {
			left: this.props.frame.origin.x + "px",
			top: this.props.frame.origin.y + "px",
			width: this.props.frame.size.width + "px",
			height: this.props.frame.size.height + "px",
			position: "absolute"
		}

		const now = this.props.now;

		return (
			<div ref={this.refCallback} style={style}>
				<Primary
					radius={this.props.radius}
					rings={this.props.rings}
					sides={this.props.sides}

					width={this.props.frame.size.width}
					height={this.props.frame.size.height}

					gTrackBallRotation={this.state.gTrackBallRotation}
					worldRotation={now.worldRotation}
					camera={now.camera}
				/>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return Object.assign({}, state, ownProps);
}
const ConnectedInteract = connect(mapStateToProps, actions)(Interact);
export default ConnectedInteract;