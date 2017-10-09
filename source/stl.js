// This file is a derivative work of
// https://github.com/YCAMInterlab/lgp.js/blob/master/lgp/stl-serializer.js

// It's probably not necessary anymore, I was getting some NaN values

const guf = require("guf");
const normalize = guf.normalizeArray;
const calculateNormals = guf.faceNormals;

export function serializeStl( input ) {
	if( input.constructor === Array ) {
		var output = "";
		for( var i = 0; i < input.length; i++ ) {
			output += serializeStlPrivate( input[ 0 ], i );
		}
		return output;
	}
	else {
		return serializeStlPrivate( input, 0 );
	}
}

function compatibleNumber(num) {
	return num;
}

function serializeStlPrivate( input, index ) {
	if( input.positions === undefined || input.cells === undefined ) {
		throw "Input Not Valid: Does not contain any positions or cells";
	}
	var name = "";
	var cells;
	if (input.cells[ 0 ].constructor === Array) {
		cells = normalize( input.cells );
		console.log("serializeStl normalize inputCells:%s;",JSON.stringify(cells));
	} else {
		cells = input.cells;
	}
	var positions = input.positions;
	if (typeof input.positions[0] === Array || typeof input.positions[0] === Float32Array) { // eslint-disable-line no-undef
		console.log("serializeStl normalize positions pre:%s;",JSON.stringify(input.positions));
		positions = normalize( input.positions );
		console.log("serializeStl normalize positions post:%s;",JSON.stringify(positions));
	} else {
		console.log("serializeStl positions:%s;",JSON.stringify(positions));
	}

	var normals = undefined;
	if( input.normals !== undefined ) {
		console.log("input normals untested:%s;",JSON.stringify(input.normals));
		normals = input.normals[0].constructor === Array ? normalize( input.normals ) : input.normals;
	}
	else {
		normals = calculateNormals( positions, cells );
	}
	var i0, i1, i2;//, a, b, c;
	var stl = "solid " + name + "\n";
	for( var i = 0; i < cells.length; i += 3 ) {
		i0 = cells[ i ] * 3;
		i1 = cells[ i + 1 ] * 3;
		i2 = cells[ i + 2 ] * 3;

		if (Number.isNaN(normals[i])) {
			normals[i] = 0;
		}
		if (Number.isNaN(normals[i+1])) {
			normals[i+1] = 0;
		}
		if (Number.isNaN(normals[i+2])) {
			normals[i+2] = 0;
		}
		
		stl += "  facet normal " + compatibleNumber(normals[ i ]) + " " + compatibleNumber(normals[ i + 1 ]) + " " + compatibleNumber(normals[ i + 2 ]) + "\n";
		stl += "	outer loop\n";
		stl += "	  vertex" + " " + compatibleNumber(positions[ i0 ]) + " " + compatibleNumber(positions[ i0 + 1 ]) + " " + compatibleNumber(positions[ i0 + 2 ]) + "\n";
		stl += "	  vertex" + " " + compatibleNumber(positions[ i1 ]) + " " + compatibleNumber(positions[ i1 + 1 ]) + " " + compatibleNumber(positions[ i1 + 2 ]) + "\n";
		stl += "	  vertex" + " " + compatibleNumber(positions[ i2 ]) + " " + compatibleNumber(positions[ i2 + 1 ]) + " " +compatibleNumber(positions[ i2 + 2 ]) + "\n";
		stl += "	endloop\n";
		stl += "  endfacet\n";
	}
	stl += ("endsolid\n");
	return stl;
}