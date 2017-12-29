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
	{ "id": "debugBase", "displayName": "Base", "type": "bool", "default": false }
];

const flameBezierValues = [
	{ "id": "flameX0", "displayName": "x0", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.1},
	{ "id": "flameY0", "displayName": "y0", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.4},
	{ "id": "flameX1", "displayName": "x1", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.2},
	{ "id": "flameY1", "displayName": "y1", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.3}
];

// const notImplemented = [
// 	{ "id": "beamTopExtended", "displayName": "Extended Beam Top", "type": "bool", "default": false },
// 	{ "id": "beamGap", "displayName": "Beam gap", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.0 },
// 	{ "id": "flatTop", "displayName": "Flat Top", "type": "bool",  "default": true }
// ];

const sun = [
	{ "id": "horizonRatio", "displayName": "Horizon Radius Ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.65 },//0.7071 },
	{ "id": "sunRatio", "displayName": "Height Ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.25 },
	{ "id": "sphereFraction", "displayName": "Slice", "type": "list", "listLabels": fractionLabels, "listValues": fractionValues, "default": fractionValues[1] }
];
const wavy = [
	{ "id": "enableWavy", "displayName": "Enable", "type": "bool", "default": true },
	{ "id": "wavyCount", "displayName": "Count", "type": "float", "rangeMin": 0.0, "rangeMax": 32.0, "default": 1.0 },
	{ "id": "wavyAmount", "displayName": "Amount", "type": "float", "rangeMin": 0.0, "rangeMax": 32.0, "default": 2.0 },
];
const flame = [
	{ "id": "useFlameBezier", "displayName": "Enable", "type": "bool", "default": true },
	{ "id": "flameBezier", "displayName": "Cubic Bezier", "type": "bezier", "default": flameBezierValues },
];
const beam = [
	{ "id": "beamCount", "displayName": "Count Per Quarter Circle", "type": "int", "rangeMin": 3, "rangeMax": 64, "default": 4.5 }, // <---
	{ "id": "starRatio", "displayName": "Height Ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 1 },
	{ "id": "splitBeams", "displayName": "Split First and Last Beam", "type": "bool", "default": false },
	{ "id": "flame", "displayName": "Flame", "type": "group", "default":flame},
	{ "id": "wavy", "displayName": "Wavy", "type": "group", "default":wavy },
	{ "id": "clampBeamEdges", "displayName": "Clamp Edges", "type": "bool", "default": true },
	//{ "id": "notImplemented", "displayName": "Not Implemented Yet", "type": "group", "default": notImplemented },
];

const base = [
	{ "id": "baseHeight", "displayName": "Base height", "type": "length", "rangeMin": 0, "rangeMax": 1.5, "default": 0.5 }
];

export const presets = [
	{ "id": "resolution", "displayName": "Resolution", "type": "int", "rangeMin": 1, "rangeMax": 200, "default": 25 },// <---
	{ "id": "radius", "displayName": "Outer Radius", "type": "length", "rangeMin": 1, "rangeMax": 50, "default": 20 },
	{ "id": "sun", "displayName": "Sun", "type": "group", "default":sun },
	{ "id": "beam", "displayName": "Beam", "type": "group", "default":beam },
	{ "id": "base", "displayName": "Base", "type": "group", "default":base },
	{ "id": "debug", "displayName": "Debug", "type": "group", "default":debug }
];