const fractionLabels = ["Quarter Circle", "Half Circle", "Whole Circle"];
const fractionValues = ["quarter","half","whole"];

// const sunShapeLabels = ["Sphere", "Cylinder"];
// const sunShapeValues = [1,2];


const debug = [
	{ "id": "debugEven", "displayName": "Even", "type": "bool", "default": false },
	{ "id": "debugOdd", "displayName": "Odd", "type": "bool", "default": false },
	{ "id": "debugLeft", "displayName": "Left", "type": "bool", "default": false },
	{ "id": "debugRight", "displayName": "Right", "type": "bool", "default": false },
	{ "id": "debugTop", "displayName": "Top", "type": "bool", "default": false },
	{ "id": "debugBottom", "displayName": "Bottom", "type": "bool", "default": false },
	{ "id": "debugFirst", "displayName": "First", "type": "bool", "default": false },
	{ "id": "debugLast", "displayName": "Last", "type": "bool", "default": false },
	{ "id": "debugUnder", "displayName": "Under", "type": "bool", "default": false }
];

const flameBezierValues = [
	{ "id": "x0", "displayName": "x0", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.1},
	{ "id": "y0", "displayName": "y0", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.3},
	{ "id": "x1", "displayName": "x1", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.1},
	{ "id": "y1", "displayName": "y1", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.3}
];

// const notImplemented = [
// 	{ "id": "beamTopExtended", "displayName": "Extended Beam Top", "type": "bool", "default": false },
// 	{ "id": "beamGap", "displayName": "Beam gap", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.0 },
// 	{ "id": "flatTop", "displayName": "Flat Top", "type": "bool",  "default": true }
// ];

const sun = [
	{ "id": "horizonRatio", "displayName": "Horizon Radius Ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.7071 },
	{ "id": "sunRatio", "displayName": "Height Ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.5 },
	{ "id": "sphereFraction", "displayName": "Slice", "type": "list", "listLabels": fractionLabels, "listValues": fractionValues, "default": fractionValues[0] }
];
const beam = [
	{ "id": "beamCount", "displayName": "Count Per Quarter Circle", "type": "int", "rangeMin": 3, "rangeMax": 64, "default": 4 }, // <---
	{ "id": "starRatio", "displayName": "Height Ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 1 },
	{ "id": "splitBeams", "displayName": "Split First and Last Beam", "type": "bool", "default": true },
	{ "id": "useFlameBezier", "displayName": "Use Flame Bezier", "type": "bool", "default": true },
	{ "id": "flameBezier", "displayName": "Flame Bezier", "type": "bezier", "default": flameBezierValues },
	//{ "id": "notImplemented", "displayName": "Not Implemented Yet", "type": "group", "default": notImplemented },
];

const base = [
	{ "id": "baseHeight", "displayName": "Base height", "type": "length", "rangeMin": 0, "rangeMax": 1.5, "default": 0.5 }
];

export const presets = [
	{ "id": "radius", "displayName": "Outer Radius", "type": "length", "rangeMin": 1, "rangeMax": 50, "default": 20 },
	{ "id": "resolution", "displayName": "Resolution", "type": "int", "rangeMin": 1, "rangeMax": 200, "default": 25 },// <---
	{ "id": "sun", "displayName": "Sun", "type": "group", "default":sun },
	{ "id": "beam", "displayName": "Beam", "type": "group", "default":beam },
	{ "id": "base", "displayName": "Base", "type": "group", "default":base },
	{ "id": "debug", "displayName": "Debug", "type": "group", "default":debug }
];