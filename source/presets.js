const fractionLabels = ["Quarter Circle", "Half Circle", "Whole Circle"];
const fractionValues = ["quarter","half","whole"];

const sunShapeLabels = ["Sphere", "Cylinder"];
const sunShapeValues = [1,2];



const bookBezier = [
	{ "id": "x0", "displayName": "x0", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.75 },
	{ "id": "y0", "displayName": "y0", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.1 },
	{ "id": "x1", "displayName": "x1", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.9 },
	{ "id": "y1", "displayName": "y1", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.25 }
];

const sun = [
	{ "id": "horizonRatio", "displayName": "Horizon Radius Ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.7071 },
	{ "id": "sunRatio", "displayName": "Height Ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.5 },
	{ "id": "sphereFraction", "displayName": "Slice", "type": "list", "listLabels": fractionLabels, "listValues": fractionValues, "default": fractionValues[0] },
];
const beam = [
	{ "id": "beamCount", "displayName": "Count Per Quarter Circle", "type": "int", "rangeMin": 3, "rangeMax": 64, "default": 2 }, // <---
	{ "id": "starRatio", "displayName": "Height Ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 1 },
	{ "id": "beamTopExtended", "displayName": "Extended Beam Top", "type": "bool", "default": false },
	{ "id": "beamGap", "displayName": "Beam gap", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.0 },
	{ "id": "splitBeams", "displayName": "Split First and Last Beam", "type": "bool", "default": true},
];
const test = [
	{ "id": "useTest", "displayName": "Use Test", "type": "bool", "default": false },
	{ "id": "bezier", "displayName": "Cubic Bezier", "type": "bezier", "default": bookBezier },
	{ "id": "pageRatio", "displayName": "Page ratio", "type": "float", "rangeMin": 0, "rangeMax": 1, "default": 0.5 }
];

const base = [
	{ "id": "baseHeight", "displayName": "Base height", "type": "length", "rangeMin": 0, "rangeMax": 1.5, "default": 0.5 },
];


export const presets = [
	{ "id": "radius", "displayName": "Outer Radius", "type": "length", "rangeMin": 1, "rangeMax": 50, "default": 20 },
	{ "id": "resolution", "displayName": "Resolution", "type": "int", "rangeMin": 1, "rangeMax": 200, "default": 5 },// <---
	{ "id": "sun", "displayName": "Sun", "type": "group", "default":sun },
	{ "id": "beam", "displayName": "Beam", "type": "group", "default":beam },
	{ "id": "test", "displayName": "Test", "type": "group", "default":test },
	{ "id": "base", "displayName": "Base", "type": "group", "default":base },
];