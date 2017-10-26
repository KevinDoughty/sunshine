// This file owes its existence to
// http://www.syedrezaali.com/ycam-grp/


//import deepFreeze from "deep-freeze"; // debug
import { h, Component } from "preact";
//import { bind } from "decko";

//import { connect } from "preact-redux";
import { connect } from "react-redux";
import * as actions from "./actions.js";
import * as plot from "./plot.js";

// Import StackGL Webgl
const glGeometry = require("gl-geometry");
const glShader = require("gl-shader");
const clear = require("gl-clear")();
const glslify = require("glslify");

// Import Math Libraries
const mat4 = require("gl-matrix").mat4;
const mat3 = require("gl-matrix").mat3; // from tutorial
const vec3 = require("gl-matrix").vec3; // trackball

// Import Web Helper Libraries
const isMobile = require("is-mobile");

//const lgp = require("lgp");
const guf = require("guf");

// Set the canvas size to fill the window and its pixel density
const mobile = isMobile( navigator.userAgent );
const dpr = mobile ? 1 : ( window.devicePixelRatio || 1 );

//Setup Shaders
const vertexMeshShader = glslify( "./solid.vert" ); // From tutorial, setup solid shaders
const fragmentMeshShader = glslify( "./solid.frag" ); // From tutorial, setup solid shaders

const d2r = Math.PI / 180.0;

class Primary extends Component {
	constructor(props) {
		super(props);
		this.canvas = null;
		this.mesh = null;
		this.meshGeo = null;
		this.meshShader = null;
		this.state = {
			modelMatrix: mat4.create(),
			viewMatrix: mat4.create(),
			normalMatrix: mat3.create(),
			rotationMatrix: mat4.create(),
			projectionMatrix: mat4.create(),
			gTrackball: false,
			gPan: false
		};
		this.refCallback = this.refCallback.bind(this);
	}

	componentDidUpdate(props,state) {
		if (props.mesh !== this.props.mesh) {
			this.initMesh();
		}
		this.draw();
	}

	createGeo(positions, cells) {
		const canvas = this.canvas;
		const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		const newPositions = [];
		const newNormals = [];
		for (let i=0; i<cells.length; i++) {
			const a = positions[ cells[i][0] ];
			const b = positions[ cells[i][1] ];
			const c = positions[ cells[i][2] ];
			const n = guf.calculateNormal( a,b,c );
			newPositions.push( a,b,c );
			newNormals.push( n,n,n );
		}
		const geo = glGeometry( gl );
		geo.attr( "aPosition", newPositions );
		geo.attr( "aNormal", newNormals );
		return geo;
	}

	initMesh() {
		const mesh = this.props.mesh;
		this.meshGeo = this.createGeo( mesh.positions, mesh.cells );
	}

	draw() {
		const { width, height } = this.props;
		const canvas = this.canvas;
		const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		canvas.width = width;
		canvas.height = height;
		gl.viewportWidth = width;
		gl.viewportHeight = height;
		
		this.updateProjection();
		const meshGeo = this.meshGeo;
		gl.viewport( 0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight );
		clear( gl );

		// Set Blending
		gl.disable( gl.DEPTH_TEST );
		gl.enable( gl.BLEND );
		gl.blendFunc( gl.SRC_ALPHA, gl.ONE );
		this.drawMesh( meshGeo, [1,1,0,1] );
	}

	updateProjection() {
		// Set Perspective Projection
		const translate = -50;
		
		const canvas = this.canvas;
		const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		const {
			modelMatrix,
			projectionMatrix
		} = this.state;
		const {
			gTrackBallRotation
		} = this.props;
		
		const worldRotation = this.props.now.worldRotation;
		const camera = this.props.now.cameraOrientation;

		const cameraX = camera[0];
		const cameraY = camera[1];
		const cameraZ = camera[2];
		
		const near = 0.01;
		const far = 1000.0;
		const fieldOfView = Math.PI / 4.0;
		const aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight;
		mat4.perspective( projectionMatrix, fieldOfView, aspectRatio, near, far );

		mat4.identity(modelMatrix);
		mat4.translate(modelMatrix, modelMatrix, vec3.fromValues(0 + cameraX, 0 + cameraY, translate + cameraZ));

		const axis = vec3.create();
		vec3.set(axis, gTrackBallRotation[1],gTrackBallRotation[2],gTrackBallRotation[3]);
		mat4.rotate(modelMatrix, modelMatrix, d2r * gTrackBallRotation[0], axis);

		const axis2 = vec3.create();
		vec3.set(axis2, worldRotation[1],worldRotation[2],worldRotation[3]);
		mat4.rotate(modelMatrix, modelMatrix, d2r * worldRotation[0], axis2);

	}

	drawMesh( geo, color ) {
		const canvas = this.canvas;
		const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		const meshShader = this.meshShader;
		if (geo) {
			gl.enable( gl.DEPTH_TEST );
			gl.enable( gl.BLEND );
			gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
			geo.bind( meshShader );
			if (isMobile) {
				meshShader.uniforms.dpr = dpr * 2.0;
			} else {
				meshShader.uniforms.dpr = dpr;
			}

			meshShader.uniforms.uPointSize = 1.0;
			meshShader.uniforms.uProjection = this.state.projectionMatrix;
			meshShader.uniforms.uView = this.state.viewMatrix;
			meshShader.uniforms.uNormalMatrix = this.state.normalMatrix;
			meshShader.uniforms.uModel = this.state.modelMatrix;
			meshShader.uniforms.uColor = color;

			geo.draw( gl.TRIANGLES );
			geo.unbind();
		}
	}

	refCallback(canvas) {
		if (this.canvas !== null) return;
		const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		if (!gl) throw new Error("this requires WebGL");
		this.canvas = canvas;
		const meshShader = glShader( gl, vertexMeshShader, fragmentMeshShader ); // From tutorial, setup solid shaders
		this.meshShader = meshShader;
		this.initMesh();
		this.draw();
	}

	render(props,state) {
		return (
			<canvas ref={this.refCallback} />
		);
	}
}

function mapStateToProps(state, ownProps) {
	//const state = outerState.main;
	return Object.assign({}, ownProps, {
		now: state.now,
		mesh: plot.meshSelector(state)
	});
}
const ConnectedPrimary = connect(mapStateToProps, actions)(Primary);
export default ConnectedPrimary;