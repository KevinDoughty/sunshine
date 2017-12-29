// Selectors are completely pointless here.
// Plotting calculation time is negligible, at least compared to half edge mesh data structure code
// Remove for ease converting back to Tinkercad

// Selectors are really tedious here, especially for simple, non-array values which should just be calculated.
// Functions for each angle and slice length might be a bit excessive too

import { createSelector } from "reselect";
import { normalizedTreeDictSelector } from "./selectors.js";

const mda = require("mda");
const Mesh = mda.Mesh;
const move = mda.MoveOperator;
const vec3 = require("gl-matrix").vec3;
//const check = mda.MeshIntegrity;
//const createFace = mda.CreateFaceOperator;
//const bezier = require("bezier");
const cubic = require("bezier").prepare(4);

const plotFancy = true; // beam sub triangles, both plotFancy and extraFancy have to be true
const extraFancy = true; // beam sub triangles subdivided into even more sub triangle strips
const fakeExtrude = true; // TODO: create a proper face with more than just 3 half edges to extrude

const half = Math.PI;
const quarter = half / 2;

//const d2r = Math.PI / 180; // debug
//const r2d = 180 / Math.PI; // debug

export const settingsSelector = createSelector(
	[normalizedTreeDictSelector],
	(normalizedTreeDict) => {
		const settings = {};
		Object.keys(normalizedTreeDict).forEach( key => {
			if (isNaN(key)) {
				settings[key] = normalizedTreeDict[key].value;
			}
		});
		return settings;
	}
);
const sphereFractionSelector = createSelector([settingsSelector], settings => settings.sphereFraction);
const beamCountSelector = createSelector([settingsSelector,sphereFractionSelector], (settings,sphereFraction) => Math.max(1, Math.min(32, sphereFraction === "quarter" ? Math.floor(settings.beamCount * 1) : settings.beamCount * 1)));
const enableWavySelector = createSelector([settingsSelector], settings => settings.enableWavy);
const wavyCountSelector = createSelector([settingsSelector], (settings) => Math.max(1, Math.min(32, settings.wavyCount * 1)));
const wavyAmountSelector = createSelector([settingsSelector], (settings) => Math.max(0, Math.min(32, settings.wavyAmount * 1)));
const resolutionSelector = createSelector([settingsSelector], settings => Math.max(1, Math.min(100, settings.resolution * 1))); // segments per quarter circle, for both latitude and longitude
const ringsSelector = createSelector([resolutionSelector], resolution => Math.round(resolution * 0.5)); // latitude // stacked ring layers
const radiusSelector = createSelector([settingsSelector], settings => settings.radius * 1);
const sunRatioSelector = createSelector([settingsSelector], settings => settings.sunRatio * 1);
const starRatioSelector = createSelector([settingsSelector], settings => settings.starRatio * 1);
const horizonRatioSelector = createSelector([settingsSelector], settings => settings.horizonRatio * 1);
const beamTopExtendedSelector = createSelector([settingsSelector], settings => settings.beamTopExtended * 1);
const baseHeightSelector = createSelector([settingsSelector], settings => settings.baseHeight * 1);
const x0Selector = createSelector([settingsSelector], settings => settings.flameX0 * 1);
const y0Selector = createSelector([settingsSelector], settings => settings.flameY0 * 1);
const x1Selector = createSelector([settingsSelector], settings => settings.flameX1 * 1);
const y1Selector = createSelector([settingsSelector], settings => settings.flameY1 * 1);
const useFlameBezierSelector = createSelector([settingsSelector], settings => settings.useFlameBezier);
const flatTopSelector = createSelector([settingsSelector], settings => settings.flatTop);
const splitBeamsSelector = createSelector([settingsSelector], settings => settings.splitBeams);
const clampBeamEdgesSelector = createSelector([settingsSelector], settings => settings.clampBeamEdges);

const debugLeftSelector = createSelector([settingsSelector], settings => settings.debugLeft);
const debugRightSelector = createSelector([settingsSelector], settings => settings.debugRight);
const debugTopSelector = createSelector([settingsSelector], settings => settings.debugTop);
const debugBottomSelector = createSelector([settingsSelector], settings => settings.debugBottom);
const debugEvenSelector = createSelector([settingsSelector], settings => settings.debugEven);
const debugOddSelector = createSelector([settingsSelector], settings => settings.debugOdd);
const debugFirstSelector = createSelector([settingsSelector], settings => settings.debugFirst);
const debugLastSelector = createSelector([settingsSelector], settings => settings.debugLast);
const debugBaseSelector = createSelector([settingsSelector], settings => settings.debugBase);
export const debuggingSelector = createSelector(
	[debugLeftSelector,debugRightSelector,debugTopSelector,debugBottomSelector,debugEvenSelector,debugOddSelector,debugFirstSelector,debugLastSelector,debugBaseSelector],
	(debugLeft,debugRight,debugTop,debugBottom,debugEven,debugOdd,debugFirst,debugLast,debugBase) => {
		return (debugLeft || debugRight || debugTop || debugBottom || debugEven || debugOdd || debugFirst || debugLast || debugBase)
	}
);

const sunRadiusSelector = createSelector(
	[radiusSelector, horizonRatioSelector],
	(radius, horizonRatio) => {
		return radius * horizonRatio;
	}
);

const sunHeightSelector = createSelector(
	[sunRadiusSelector, sunRatioSelector],
	(sunRadius, sunRatio) => {
		return sunRadius * sunRatio;
	}
);

const arcRadiansSelector = createSelector(
	[sphereFractionSelector],
	(sphereFraction) => {
		if (sphereFraction === "whole") return Math.PI * 2.0;
		if (sphereFraction === "half") return Math.PI;
		return Math.PI / 2.0;
	}
);

const slicesSelector = createSelector( // longitude // pie slices. subtract a slice from the sun
	[sphereFractionSelector, resolutionSelector, beamCountSelector],
	(sphereFraction, resolution, beamCount) => { // TODO: need to handle zero beamCount
		let result = resolution;
		const division = 1.0 * resolution / beamCount;
		const ceiled = Math.ceil(division);
		const isIntegral = (ceiled === division);
		if (!isIntegral) result = ceiled * beamCount;
		if (sphereFraction === "whole") return result * 8;
		if (sphereFraction === "half") return result * 4;
		return result * 2; // quarter // Times two for the valleys
	}
);
const sliceDeltaSelector = createSelector(
	[sphereFractionSelector, slicesSelector],
	(sphereFraction, slices) => {
		if (sphereFraction === "quarter") return Math.PI / slices / 2;
		if (sphereFraction === "half") return Math.PI / slices;
		return Math.PI / slices * 2; // whole
	}
);

const fullBeamCountSelector = createSelector(
	[sphereFractionSelector, beamCountSelector],
	(sphereFraction, beamCount) => {
		if (sphereFraction === "whole") return beamCount * 4;
		if (sphereFraction === "half") return beamCount * 2;
		return beamCount; // quarter
	}
);

// const starBasePointsSelector = createSelector(
// 	[arcRadiansSelector, fullBeamCountSelector, radiusSelector, sunRadiusSelector, baseHeightSelector],
// 	(arcRadians, fullBeamCount, radius, sunRadius, baseHeight) => {
// 		const r = radius;
// 		const r2 = sunRadius;
// 		const divisions = fullBeamCount * 2;
// 		const points = [];
// 		const z = 0;
// 		points.push([0,0,z]);
// 		for (let i = 0; i <= divisions; i++) {
// 			const a = i / divisions * arcRadians;
// 			const r3 = (i % 2) ? r2 : r;
// 			const x = Math.cos(a) * r3;
// 			const y = Math.sin(a) * r3;
// 			points.push([x, y, z]);
// 		}
// 		return points;
// 	}
// );

// function sunHeight(radius, sunRatio, horizonRatio) {
// 	return radius * sunRatio * horizonRatio;
// }

function starHeight(sunHeight, starRatio) {
	return sunHeight * starRatio;
}

function starTipAngle(radius, starHeight) {
	const opposite = starHeight;
	const adjacent = radius;
	const hypotenuse = Math.hypot(opposite,adjacent);
	const ratio = opposite/hypotenuse;
	const value = Math.asin(ratio); // between -1 and 1
	return value;
}

function starTopAngle(radius, starHeight) {
	const angle = starTipAngle(radius, starHeight);
	return quarter - angle;
}

function calculatedStarRadiusAtTheta(theta, slices, arcRadians, fullBeamCount, fullRadius, sunRadius) { // "step 1"
	const divisions = fullBeamCount * 2; // 2 divisions per beam
	const aboveCenterDivisionTheta = 1 / divisions * arcRadians; // from above, slice angle per division
	const aboveCenterBeamTheta = 1 / fullBeamCount * arcRadians; // should just simply be aboveCenterDivisionTheta * 2
	let aboveCenterMidwayTheta = theta % aboveCenterDivisionTheta;
	const aboveCenterNormalizedTheta = theta % aboveCenterBeamTheta;
	if (aboveCenterNormalizedTheta >= aboveCenterDivisionTheta) aboveCenterMidwayTheta = aboveCenterDivisionTheta - aboveCenterMidwayTheta;
	const firstStarValleyX = Math.cos(aboveCenterDivisionTheta) * sunRadius;
	const firstStarValleyY = Math.sin(aboveCenterDivisionTheta) * sunRadius;
	const aboveTipOpposite = firstStarValleyY; // opposite side length of the tip when viewed from above
	const aboveTipAdjacent = fullRadius - firstStarValleyX; // adjacent side length of the tip when viewed from above
	const aboveTipHypotenuse = Math.hypot(aboveTipOpposite, aboveTipAdjacent); // hypotenuse length of the tip when viewed from above
	const aboveTipTheta = Math.asin(aboveTipOpposite/aboveTipHypotenuse); // angle of beam tip of division (half beam)
	const C = aboveCenterMidwayTheta;
	const B = aboveTipTheta;
	const a = fullRadius;
	const A = half - B - C;
	const b = a * Math.sin(B) / Math.sin(A); // ASA and law of sines to determine "step 1" length, a/sin(A) = b/sin(B) = c/sin(C)
	return b;
}

const beamThetaArraySelector = createSelector( // step 2
	[slicesSelector,arcRadiansSelector, fullBeamCountSelector, radiusSelector, sunRadiusSelector,sliceDeltaSelector, sunRatioSelector, starRatioSelector, horizonRatioSelector],
	(slices, arcRadians, fullBeamCount, radius, sunRadius, sliceDelta, sunRatio, starRatio, horizonRatio) => {
		const divisions = fullBeamCount * 2;
		const per = slices / divisions;
		const points = [];
		for (let i = 0; i <= per; i++) {
			const theta = i * sliceDelta;
			let starRadius = calculatedStarRadiusAtTheta(theta, slices, arcRadians, fullBeamCount, radius, sunRadius);
			const sunR = radius * horizonRatio;
			const starH = starHeight(sunR, starRatio);
			const angleH = starTopAngle(starRadius, starH);
			const c = starH;
			const b = sunR;
			const B = angleH;
			const C = Math.asin( c / b * Math.sin(B) );
			const A = half - B - C;
			let result = quarter - A;
			points.push(result);
		}
		return points;
	}
);

const beamFullTopThetaSelector = createSelector( // not isosceles if squashed
	[radiusSelector, sunRatioSelector, starRatioSelector, beamTopExtendedSelector, horizonRatioSelector, sunRadiusSelector],
	(radius, sunRatio, starRatio, beamTopExtended, horizonRatio, sunRadius) => {
		const sunH = radius * horizonRatio;
		const starH = starHeight(sunH, starRatio);
		const angleH = starTopAngle(radius, starH, null, horizonRatio);
		const c = starH;
		const b = sunH;
		const B = angleH;
		const C = Math.asin( c / b * Math.sin(B) );
		const A = half - B - C;
		const result = quarter - A;
		return result;
	}
);

const ringDeltaTopSelector = createSelector([resolutionSelector,beamFullTopThetaSelector], (resolution, beamTopTheta) => {
	const minus = quarter - beamTopTheta;
	const result = minus / resolution;
	return result;
});

const beamLengthVertexCountSelector = createSelector(
	[ringsSelector],// fullBeamCountSelector, slicesSelector],
	(rings) => {//, fullBeamCount, slices) => {
		//const divisions = fullBeamCount * 2;
		//const per = slices / divisions;
		//return per;
		return rings;
	}
);


const bottomFaceIndicesSelector = createSelector(
	[sphereFractionSelector, ringsSelector, slicesSelector, beamThetaArraySelector, fullBeamCountSelector, beamLengthVertexCountSelector, splitBeamsSelector],
	(sphereFraction, rings, slices, beamThetaArray, fullBeamCount, beamLengthVertexCount, splitBeams) => {

		const bottomFaceIndices = [];
		const divisions = fullBeamCount * 2;
		const per = slices / divisions;
		const intersectionAreaRings = beamThetaArray.length-1;
		const anchor = (rings+intersectionAreaRings+1) * (slices+1);
		const tips = anchor + 1;
		const extraFancyStart = (rings+intersectionAreaRings+1) * (slices+1) + 1 + fullBeamCount + 1;
		const lastEdgeCount = Math.floor((slices + per) / (per * 2));
		const firstBeamEndsStart = lastEdgeCount * beamLengthVertexCount * 2 + extraFancyStart + (slices+1) * beamLengthVertexCount * 2;
		const lastBeamEndsStart = firstBeamEndsStart + intersectionAreaRings * beamLengthVertexCount;

		if (sphereFraction !== "whole") { // first beam ends

			bottomFaceIndices.push(anchor);

			const firstRoot = (rings + intersectionAreaRings) * (slices + 1);
			bottomFaceIndices.push(firstRoot);
			if (splitBeams) {
				//const location = extraFancyStart + beamLengthVertexCount;
				const location = firstBeamEndsStart + (intersectionAreaRings - 1) * beamLengthVertexCount;
				for (let a=1; a<beamLengthVertexCount; a++) {
					const nextVertex = location + a;
					bottomFaceIndices.push(nextVertex);
				}
			}
		}

		if (plotFancy || extraFancy) for (let j=0; j<slices; j++) { // new beam indices
			const larger = !splitBeams ? (j + per) % (per * 2) : j % (per * 2);
			const smaller = j % per;
			let i = smaller;
			const division = Math.floor( j / per );
			const tipNumber = !splitBeams ? Math.floor(division/2) : Math.ceil(division/2);
			const tipIndex = tips + tipNumber;
			const isLastEdgeBeforeBeamValleyToSneakInOneMore = !splitBeams ? !((j + 1) % (per * 2)) : !((j + 1 + per) % (per * 2))
			const notLastEdge = !isLastEdgeBeforeBeamValleyToSneakInOneMore;
			const isBeamValley = !splitBeams ? !(j % (per * 2)) : !((j + per) % (per * 2));
			if (larger < per) {
				if (isLastEdgeBeforeBeamValleyToSneakInOneMore) {
					const additionalDueToBeamValleysHavingTwoLines = !splitBeams ? Math.floor(j / (per * 2)) : Math.floor((j + per) / (per * 2));
					const slice = j + additionalDueToBeamValleysHavingTwoLines;
					let location = extraFancyStart;
					let nextLocation = location;
					let nextSlice = slice+1;
					let nextLevel = (nextSlice * beamLengthVertexCount * 2);
					let a = beamLengthVertexCount;
					while (a--) {
						const nextSecond = nextLocation + nextLevel + a;
						bottomFaceIndices.push(nextSecond);
					}
				}
			}
			if (larger >= per) {
				if (isBeamValley) {// && (splitBeams || j > 0)) {
					if (notLastEdge) i = per - i;
					const additionalDueToBeamValleysHavingTwoLines = !splitBeams ? Math.floor(j / (per * 2)) : Math.floor((j + per) / (per * 2));
					const slice = j + additionalDueToBeamValleysHavingTwoLines;
					let location = extraFancyStart;
					let level = (slice * beamLengthVertexCount * 2);
					const k = (rings+intersectionAreaRings) * (slices + 1);
					const twoRoot = k + j;
					bottomFaceIndices.push(twoRoot);
					for (let a=0; a<beamLengthVertexCount; a++) {
						const nextFirst = location + level + a;
						bottomFaceIndices.push(nextFirst);
					}
				}
			}
		}

		if (sphereFraction !== "whole") { // last beam ends
			if (splitBeams) {
				//const location = extraFancyStart + (slices + lastEdgeCount) * beamLengthVertexCount * 2 + beamLengthVertexCount;
				const location = lastBeamEndsStart + (intersectionAreaRings - 1) * beamLengthVertexCount;
				let a = beamLengthVertexCount;
				while (--a) {
					const nextVertex = location + a;
					bottomFaceIndices.push(nextVertex);
				}
			}
			const lastRoot = (rings + intersectionAreaRings) * (slices + 1) + slices;
			bottomFaceIndices.push(lastRoot);
			bottomFaceIndices.push(anchor);
		}
		
		return bottomFaceIndices;
	}
);




function resolveBezier(useFlameBezier,x0,y0,x1,y1,fromX,fromY,toX,toY,loc,per,length,direction, isTipSliceOrEnd, enableWavy, wavyCount, wavyAmount) {
	let wavyX = 0;
	let wavyY = 0;
	let waveX = 1;
	let waveY = 1;



	const straightAngle = Math.atan2(toY-fromY, toX-fromX);
	const eighth = Math.PI / 4;
	const difference = straightAngle-eighth;
	if (typeof direction === "undefined") direction === 1;
	const amount = loc / per;
	const twopi = Math.PI * 2;

	const flip = 0;//Math.PI; // Math.PI or zero

	const denominator = twopi * wavyAmount;
	const valueX = amount * twopi;
	const valueY = Math.sin(wavyCount * (valueX-twopi) - flip) * (valueX-twopi) / denominator;

	if (isTipSliceOrEnd || !useFlameBezier) {
		if (enableWavy) {
			const angle = Math.atan2(valueY,valueX) + straightAngle;
			const dist = Math.hypot(valueX,valueY);
			const X = fromX + Math.cos(angle) * dist * length / twopi;
			const Y = fromY + Math.sin(angle) * dist * length / twopi;
			const result =  [X, Y];
			return result;
		} else {
			const X = (fromX + (toX - fromX) * loc / per);
			const Y = (fromY + (toY - fromY) * loc / per);
			return [X, Y];
		}
	}

	const X = [0, direction < 0 ? y0 : x0, direction < 0 ? y1 : x1, 1];
	const Y = [0, direction < 0 ? x0 : y0, direction < 0 ? x1 : y1, 1];
	const x = cubic(X, amount);
	const y = cubic(Y, amount);
	const flameAngle = Math.atan2(y,x) + difference;
	const angle = Math.atan2(valueY,valueX) + straightAngle;
	const dist = Math.hypot(valueX,valueY);

	if (enableWavy) {
		const wavyAngle = Math.atan2(valueY,valueX) + flameAngle;
		const dist = Math.hypot(valueX,valueY);
		const XX = fromX + Math.cos(wavyAngle) * dist * length / twopi;
		const YY = fromY + Math.sin(wavyAngle) * dist * length / twopi;
		const result =  [XX, YY];
		return result;
	}
	const bezierAngle = Math.atan2(y,x) + difference;
	const xx = wavyX + fromX + Math.cos(bezierAngle) * length * amount;
	const yy = wavyY + fromY + Math.sin(bezierAngle) * length * amount;
	const result =  [xx, yy];
	return result;
}

function lengthOfEdge(firstPoint, tipPoint) { // this may not be quite right, on top
	return Math.hypot(firstPoint[0]-tipPoint[0], firstPoint[1]-tipPoint[1]);
}

function clampedBeamPoint(clampBeamEdges, sphereFraction, point) { // This really needs to affect the z value, otherwise edges are jagged
	if (!clampBeamEdges || sphereFraction === "whole") return point;
	if (sphereFraction === "half") return [point[0], Math.max(0, point[1]), point[2]];
	if (sphereFraction === "quarter") return [Math.max(0, point[0]), Math.max(0, point[1]), point[2]];
}
const sunVerticesSelector = createSelector(
	[ringsSelector,slicesSelector,sliceDeltaSelector,sunRadiusSelector,sunHeightSelector,ringDeltaTopSelector,beamFullTopThetaSelector,beamThetaArraySelector,fullBeamCountSelector,arcRadiansSelector,radiusSelector,sphereFractionSelector,baseHeightSelector,bottomFaceIndicesSelector,x0Selector,y0Selector,x1Selector,y1Selector,useFlameBezierSelector, beamLengthVertexCountSelector, splitBeamsSelector, enableWavySelector, wavyCountSelector, wavyAmountSelector, clampBeamEdgesSelector],
	(rings, slices, sliceDelta, sunRadius, sunHeight, ringDeltaTop, beamFullTopTheta, beamThetaArray, fullBeamCount,arcRadians,radius,sphereFraction,baseHeight,bottomFaceIndices,x0,y0,x1,y1,useFlameBezier,beamLengthVertexCount, splitBeams, enableWavy, wavyCount, wavyAmount, clampBeamEdges) => {
		const vertexData = [];
		for (let i=0; i<rings; i++) { // latitude // stacked layers // the cap
			const theta = i * ringDeltaTop; // need two passes, above beam top and below beam top.
			const cosTheta = Math.cos(theta);
			const sinTheta = Math.sin(theta);
			for (let j=0; j<=slices; j++) { // longitude // slices
				const phi = j * sliceDelta;
				const cosPhi = Math.cos(phi);
				const sinPhi = Math.sin(phi);
				const x = cosPhi * sinTheta;
				const z = cosTheta;
				const y = sinPhi * sinTheta;
				vertexData.push([x*sunRadius, y*sunRadius, z*sunHeight]); // scaling z axis
			}
		}

		const intersectionAreaRings = beamThetaArray.length-1;
		for (let i=0; i<intersectionAreaRings+1; i++) { // latitude // stacked layers // the intersection area
			const theta = quarter - beamThetaArray[i];
			const cosTheta = Math.cos(theta);
			const sinTheta = Math.sin(theta);
			for (let j=0; j<=slices; j++) { // longitude // slices
				const phi = j * sliceDelta;
				const cosPhi = Math.cos(phi);
				const sinPhi = Math.sin(phi);
				const x = cosPhi * sinTheta;
				const z = cosTheta;
				const y = sinPhi * sinTheta;
				vertexData.push([x*sunRadius, y*sunRadius, z*sunHeight]);
			}
		}

// ANCHOR VERTEX
		vertexData.push([0,0,0]); // anchor

// BEAM TIP VERTICES
		const tipCount = fullBeamCount+1;
		for (let i = 0; i < tipCount; i++) { // points
			const a = i / fullBeamCount * arcRadians + (splitBeams ? 0 : 1 / fullBeamCount * arcRadians * 0.5);
			const x = Math.cos(a) * radius;
			const y = Math.sin(a) * radius;
			vertexData.push([x, y, 0]);
		}

// BEAM VARIABLES
		const divisions = fullBeamCount * 2;
		const per = slices / divisions;
		const anchor = (rings+intersectionAreaRings+1) * (slices+1);
		const tips = anchor + 1;

// DEBUG:
// 		const extraFancyStart = (rings+intersectionAreaRings+1) * (slices+1) + 1 + fullBeamCount + 1;
// 		const lastEdgeCount = Math.floor((slices + per) / (per * 2));
// 		const firstBeamEndsStart = lastEdgeCount * per * 2 + extraFancyStart + (slices+1) * per * 2;
// 		const lastBeamEndsStart = firstBeamEndsStart + intersectionAreaRings * per;
// 		const firstBeamEndsStart = lastEdgeCount * beamLengthVertexCount * 2 + extraFancyStart + (slices+1) * beamLengthVertexCount * 2;
// 		const lastBeamEndsStart = firstBeamEndsStart + intersectionAreaRings * beamLengthVertexCount;
// 		const pedestalStart = (sphereFraction === "whole" || !splitBeams) ? firstBeamEndsStart : lastBeamEndsStart + intersectionAreaRings * beamLengthVertexCount;
// 		const sunUndersideStart = (fakeExtrude && baseHeight > 0) ? pedestalStart + bottomFaceIndices.length : (rings+intersectionAreaRings) * (slices + 1);
// 		const underAnchorLoc = sunUndersideStart + slices + 1;

// BEAM SEGMENT VERTICES
		if (extraFancy) for (let j=0; j<=slices; j++) { // new beam segment vertices

			const larger = !splitBeams ? (j + per) % (per * 2) : j % (per * 2);
			const smaller = j % per;
			let i = smaller;
			const division = Math.floor( j / per );
			let tipNumber = !splitBeams ? Math.floor(division/2) : Math.ceil(division/2);
			let tipIndex = tips + tipNumber;
			const isLastEdgeBeforeBeamValleyToSneakInOneMore = !splitBeams ? !((j + 1) % (per * 2)) : !((j + 1 + per) % (per * 2))
			let tipPoint = vertexData[tipIndex];

			let pedestal = 0;
			if (fakeExtrude && baseHeight > 0) pedestal = -baseHeight;
			if (larger < per) {
				const firstRoot = (rings + i) * (slices + 1) + j;
				const firstPoint = vertexData[firstRoot];
				const beamSlice = !splitBeams ? tipNumber*per*2+per : tipNumber*per*2;
				const topEdgeLength = lengthOfEdge(firstPoint, tipPoint);
				const isEndPiece = splitBeams && (j === 0 || j === slices);
				const isTipSlice = (beamSlice === j);
				for (let a=1; a<beamLengthVertexCount+1; a++) { // top side
					const value = resolveBezier(useFlameBezier,x0,y0,x1,y1,firstPoint[0],firstPoint[1],tipPoint[0],tipPoint[1],a,beamLengthVertexCount,topEdgeLength,1, isTipSlice || isEndPiece, enableWavy, wavyCount, wavyAmount);
					vertexData.push( clampedBeamPoint(clampBeamEdges, sphereFraction, [
						value[0],
						value[1],
						firstPoint[2] + (tipPoint[2] - firstPoint[2]) * a / beamLengthVertexCount
					]));
				}
				const k = (rings+intersectionAreaRings) * (slices + 1);
				const oneIndex = k + j; // same as sun bottom, except j loop is one greater, thus too long
				const onePoint = vertexData[oneIndex];
				const bottomEdgeLength = lengthOfEdge(onePoint, tipPoint);
				for (let a=1; a<beamLengthVertexCount+1; a++) { // underside
					const value = resolveBezier(useFlameBezier,x0,y0,x1,y1,onePoint[0],onePoint[1],tipPoint[0],tipPoint[1],a,beamLengthVertexCount,bottomEdgeLength,1, isTipSlice || isEndPiece, enableWavy, wavyCount, wavyAmount);
					vertexData.push( clampedBeamPoint(clampBeamEdges, sphereFraction, [
						value[0],
						value[1],
						onePoint[2] + (tipPoint[2] - onePoint[2]) * a / beamLengthVertexCount + pedestal
					]));
				}
			}

			if (larger >= per || (isLastEdgeBeforeBeamValleyToSneakInOneMore && j < slices)) { // isLastEdgeBeforeBeamValleyToSneakInOneMore to sneak in one more set of vertices
				let slice = j;
				let direction = -1;
				if (isLastEdgeBeforeBeamValleyToSneakInOneMore) { // last edge of the new beam segments
					slice++;
					i++;
					tipNumber = !splitBeams ? Math.floor(division/2) : Math.ceil(division/2);
					tipIndex = tips + tipNumber;
					tipPoint = vertexData[tipIndex];
					direction = 1;
				} else {
					i = per - i;
				}
				const firstRoot = (rings + i) * (slices + 1) + slice;
				const firstPoint = vertexData[firstRoot];
				const beamSlice = tipNumber*per*2;
				const topEdgeLength = lengthOfEdge(firstPoint, tipPoint);
				for (let a=1; a<beamLengthVertexCount+1; a++) { // top side
					const value = resolveBezier(useFlameBezier,x0,y0,x1,y1,firstPoint[0],firstPoint[1],tipPoint[0],tipPoint[1],a,beamLengthVertexCount,topEdgeLength,direction, false, enableWavy, wavyCount, wavyAmount);
					vertexData.push( clampedBeamPoint(clampBeamEdges, sphereFraction, [
						value[0],
						value[1],
						firstPoint[2] + (tipPoint[2] - firstPoint[2]) * a / beamLengthVertexCount
					]));
				}
				const k = (rings+intersectionAreaRings) * (slices + 1);
				const oneIndex = k + slice;
				const onePoint = vertexData[oneIndex];
				const bottomEdgeLength = lengthOfEdge(onePoint, tipPoint);
				for (let a=1; a<beamLengthVertexCount+1; a++) { // underside
					const value = resolveBezier(useFlameBezier,x0,y0,x1,y1,onePoint[0],onePoint[1],tipPoint[0],tipPoint[1],a,beamLengthVertexCount,bottomEdgeLength,direction, false, enableWavy, wavyCount, wavyAmount);
					vertexData.push( clampedBeamPoint(clampBeamEdges, sphereFraction, [
						value[0],
						value[1],
						onePoint[2] + (tipPoint[2] - onePoint[2]) * a / beamLengthVertexCount + pedestal
					]));
				}
			}
		}

		if (extraFancy && sphereFraction !== "whole" && splitBeams) for (let i=1; i<intersectionAreaRings+1; i++) { // beam ends
			const firstRoot = (rings + i) * (slices + 1);
			const endPoint = vertexData[firstRoot];
			const tipPoint = vertexData[ tips ];
			for (let a=1; a<beamLengthVertexCount+1; a++) {
				vertexData.push([ // beam end
					endPoint[0] + (tipPoint[0] - endPoint[0]) * a / beamLengthVertexCount,
					endPoint[1] + (tipPoint[1] - endPoint[1]) * a / beamLengthVertexCount,
					endPoint[2] + (tipPoint[2] - endPoint[2]) * a / beamLengthVertexCount
				]);
			}
		}

		if (extraFancy && sphereFraction !== "whole" && splitBeams) for (let i=1; i<intersectionAreaRings+1; i++) { // beam ends
			const lastRoot = (rings + i) * (slices + 1) + slices;
			const endPoint = vertexData[lastRoot];
			const tipPoint = vertexData[ tips + fullBeamCount ];
			for (let a=1; a<beamLengthVertexCount+1; a++) {
				vertexData.push([ // beam end
					endPoint[0] + (tipPoint[0] - endPoint[0]) * a / beamLengthVertexCount,
					endPoint[1] + (tipPoint[1] - endPoint[1]) * a / beamLengthVertexCount,
					endPoint[2] + (tipPoint[2] - endPoint[2]) * a / beamLengthVertexCount
				]);
			}
		}

		if (fakeExtrude && baseHeight > 0) {
			const length = bottomFaceIndices.length; // pedestal sides
			for (let i=0; i<length; i++) { // pedestal outline (copied)
				const vertex = vertexData[ bottomFaceIndices[i] ];
				vertexData.push([
					vertex[0],
					vertex[1],
					-baseHeight
				]);
			}
			const theta = Math.PI / 2.0;
			const sinTheta = Math.sin(theta);
			
			for (let j=0; j<=slices; j++) { // pedestal sun underside, otherwise using sphere bottom edge vertices
				const phi = j * sliceDelta;
				const cosPhi = Math.cos(phi);
				const sinPhi = Math.sin(phi);
				const x = cosPhi * sinTheta;
				const y = sinPhi * sinTheta;
				vertexData.push([x*sunRadius, y*sunRadius, -baseHeight]);
			}

			const anchorVertex = vertexData[anchor];
			vertexData.push([
				anchorVertex[0],
				anchorVertex[1],
				-baseHeight
			]);
		}

		//deepFreeze(vertexData);
		return vertexData;
	}
);




const sunIndicesSelector = createSelector(
	[sphereFractionSelector, ringsSelector, slicesSelector, beamThetaArraySelector, fullBeamCountSelector, bottomFaceIndicesSelector, baseHeightSelector,flatTopSelector, debugLeftSelector, debugRightSelector, debugTopSelector, debugBottomSelector, debugEvenSelector, debugOddSelector, debugFirstSelector, debugLastSelector, debugBaseSelector, beamLengthVertexCountSelector, splitBeamsSelector],
	(sphereFraction, rings, slices, beamThetaArray, fullBeamCount, bottomFaceIndices, baseHeight, flatTop, debugLeft, debugRight, debugTop, debugBottom, debugEven, debugOdd, debugFirst, debugLast, debugBase, beamLengthVertexCount, splitBeams) => {
		
		
		const indexData = [];
		const divisions = fullBeamCount * 2;
		const per = slices / divisions;
		const intersectionAreaRings = beamThetaArray.length-1;
		const anchor = (rings+intersectionAreaRings+1) * (slices+1);
		const tips = anchor + 1;
		const extraFancyStart = (rings+intersectionAreaRings+1) * (slices+1) + 1 + fullBeamCount + 1;
		const lastEdgeCount = Math.floor((slices + per) / (per * 2));
		const firstBeamEndsStart = lastEdgeCount * beamLengthVertexCount * 2 + extraFancyStart + (slices+1) * beamLengthVertexCount * 2;
		const lastBeamEndsStart = firstBeamEndsStart + intersectionAreaRings * beamLengthVertexCount;
		const pedestalStart = (sphereFraction === "whole" || !splitBeams) ? firstBeamEndsStart : lastBeamEndsStart + intersectionAreaRings * beamLengthVertexCount;
		const sunUndersideStart = (fakeExtrude && baseHeight > 0) ? pedestalStart + bottomFaceIndices.length : (rings+intersectionAreaRings) * (slices + 1);
		const underAnchorLoc = sunUndersideStart + slices + 1;
		
		for (let i=0; i<rings; i++) { // the cap
			for (let j=0; j<slices; j++) {
				const first = i * (slices + 1) + j;
				const second = first + slices + 1;
				indexData.push([first,second,first+1]);
				indexData.push([second,second+1,first+1]);
			}
		}

		for (let i=0; i<intersectionAreaRings; i++) { // the intersection area
			for (let j=0; j<slices; j++) {
				const first = (rings + i) * (slices + 1) + j;
				const second = first + slices + 1;
				const larger = !splitBeams ? (j + per) % (per * 2) : j % (per * 2);
				const smaller = j % per;
				let k = smaller;
				if (larger >= per) {
					k = per - k;
					if (!plotFancy || k-1 >= i) indexData.push([first,second,first+1]);
					if (!plotFancy || k-1 > i) indexData.push([second,second+1,first+1]);
				} else {
					if (!plotFancy || k > i) indexData.push([second,second+1,first]);
					if (!plotFancy || k >= i) indexData.push([second+1,first+1,first]);
				}
			}
		}

		if (plotFancy || extraFancy) for (let j=0; j<slices; j++) { // new beam indices

			const larger = !splitBeams ? (j + per) % (per * 2) : j % (per * 2);
			const smaller = j % per;
			let i = smaller;
			const division = Math.floor( j / per );
			const tipNumber = !splitBeams ? Math.floor(division/2) : Math.ceil(division/2);
			const tipIndex = tips + tipNumber;
			const isLastEdgeBeforeBeamValleyToSneakInOneMore = !splitBeams ? !((j + 1) % (per * 2)) : !((j + 1 + per) % (per * 2))
			const notLastEdge = !isLastEdgeBeforeBeamValleyToSneakInOneMore;

			if (larger < per) {
				const firstRoot = (rings + i) * (slices + 1) + j;
				const secondRoot = (rings + i + 1) * (slices + 1) + j + 1;
				const additionalDueToBeamValleysHavingTwoLines = !splitBeams ? Math.floor(j / (per * 2)) : Math.floor((j + per) / (per * 2));
				const slice = j + additionalDueToBeamValleysHavingTwoLines;
				let location = extraFancyStart;
				let nextLocation = location;
				let level = (slice * beamLengthVertexCount * 2);
				let nextSlice = slice+1;
				let nextLevel = (nextSlice * beamLengthVertexCount * 2);
				let k = (rings+intersectionAreaRings) * (slices + 1);
				if (fakeExtrude && baseHeight > 0) k = pedestalStart + bottomFaceIndices.length;
				const underOne = k + j;
				const underTwo = underOne + 1;
				if (!extraFancy) {
					indexData.push([secondRoot, firstRoot, tipIndex]); // beam top side
					indexData.push([underOne, underTwo, tipIndex]); // beam underside
				} else {
					let a = 0;
					const midFirst = location + level + a;
					const midSecond = nextLocation + nextLevel + a;
					if ((!debugEven || j % 2 !== 0) && (!debugOdd || j % 2 !== 1)) {
						if (!debugLeft && !debugTop) indexData.push([secondRoot, firstRoot, midSecond]);
						if (!debugRight && !debugTop) indexData.push([firstRoot, midFirst, midSecond]);
						if (!debugLeft && !debugBottom) indexData.push([underOne, underTwo, midSecond+beamLengthVertexCount]);
						if (!debugRight && !debugBottom) indexData.push([underOne, midSecond+beamLengthVertexCount, midFirst+beamLengthVertexCount]);
						for (a=1; a<beamLengthVertexCount; a++) {
							const previousFirst = location + level + (a - 1);
							const previousSecond = nextLocation + nextLevel + (a - 1);
							const nextFirst = location + level + a;
							const nextSecond = nextLocation + nextLevel + a;
							if (!debugLeft && !debugTop) indexData.push([previousSecond, previousFirst, nextSecond]);

							//if (a < beamLengthVertexCount-1 && !debugRight && !debugTop) indexData.push([previousFirst, nextFirst, nextSecond]);
							if (!debugRight && !debugTop) indexData.push([previousFirst, nextFirst, nextSecond]);

							if (!debugLeft && !debugBottom) indexData.push([previousFirst+beamLengthVertexCount, previousSecond+beamLengthVertexCount, nextSecond+beamLengthVertexCount]);

							//if (a < beamLengthVertexCount-1 && !debugRight && !debugBottom) indexData.push([previousFirst+per, nextSecond+per, nextFirst+per]);
							if (!debugRight && !debugBottom) indexData.push([previousFirst+beamLengthVertexCount, nextSecond+beamLengthVertexCount, nextFirst+beamLengthVertexCount]);
						}
					}
				}
			}

			if (larger >= per) {
			//if (larger >= per || (isLastEdgeBeforeBeamValleyToSneakInOneMore && j < slices)) {
				if (notLastEdge) i = per - i;
				let firstRoot = (rings + i) * (slices + 1) + j;
				let secondRoot = firstRoot - slices;
				const additionalDueToBeamValleysHavingTwoLines = !splitBeams ? Math.floor(j / (per * 2)) : Math.floor((j + per) / (per * 2));
				const slice = j + additionalDueToBeamValleysHavingTwoLines;
				let location = extraFancyStart;
				let nextLocation = location;
				let level = (slice * beamLengthVertexCount * 2);
				let nextSlice = slice+1;
				let nextLevel = (nextSlice * beamLengthVertexCount * 2);
				let k = (rings+intersectionAreaRings) * (slices + 1);
				if (fakeExtrude && baseHeight > 0) k = pedestalStart + bottomFaceIndices.length;
				const underOne = k + j;
				const underTwo = underOne + 1;
				if (!extraFancy) {
					indexData.push([secondRoot, firstRoot, tipIndex]); // beam top side
					indexData.push([underOne, underTwo, tipIndex]); // beam underside
				} else {
					let a = 0;
					const midFirst = location + level + a;
					const midSecond = nextLocation + nextLevel + a;
					if ((!debugEven || j % 2 !== 0) && (!debugOdd || j % 2 !== 1)) {
						if (!debugLeft && !debugTop) indexData.push([secondRoot, firstRoot, midFirst]);
						if (!debugRight && !debugTop) indexData.push([secondRoot, midFirst, midSecond]);
						if (!debugLeft && !debugBottom) indexData.push([underOne, underTwo, midFirst+beamLengthVertexCount]);
						if (!debugRight && !debugBottom) indexData.push([underTwo, midSecond+beamLengthVertexCount, midFirst+beamLengthVertexCount]);
						for (a=1; a<beamLengthVertexCount; a++) {
							const previousFirst = location + level + (a - 1);
							const previousSecond = nextLocation + nextLevel + (a - 1);
							const nextFirst = location + level + a;
							const nextSecond = nextLocation + nextLevel + a;
							if (!debugLeft && !debugTop) indexData.push([previousSecond, previousFirst, nextFirst]);
							//if (a < per-1 && !debugRight && !debugTop) indexData.push([previousSecond, nextFirst, nextSecond]);
							if (!debugRight && !debugTop) indexData.push([previousSecond, nextFirst, nextSecond]);
							if (!debugLeft && !debugBottom) indexData.push([previousSecond+beamLengthVertexCount, nextFirst+beamLengthVertexCount, previousFirst+beamLengthVertexCount]);
							//if (a < per-1 && !debugRight && !debugBottom) indexData.push([previousSecond+per, nextSecond+per, nextFirst+per]);
							if (!debugRight && !debugBottom) indexData.push([previousSecond+beamLengthVertexCount, nextSecond+beamLengthVertexCount, nextFirst+beamLengthVertexCount]);
						}
					}
				}
			}
		}

		if (!debugFirst && plotFancy && sphereFraction !== "whole" && splitBeams) for (let i=0; i<intersectionAreaRings; i++) { // first beam ends
			const one = (rings + i) * (slices + 1);
			const two = (rings + i + 1) * (slices + 1);
			const firstTip = tips;
			if (!extraFancy) {
				indexData.push([one, two, firstTip]); // beam end
			} else {
				let location = extraFancyStart;
				if (i) location = firstBeamEndsStart + (i-1)*beamLengthVertexCount;
				let nextLocation = firstBeamEndsStart + i*beamLengthVertexCount;
				// temporarily disabled again
				//if (i === intersectionAreaRings-1) nextLocation = extraFancyStart + beamLengthVertexCount; // last line is the underside
				let a = 0;
				const midFirst = location + a;
				const midSecond = nextLocation + a;
				if ((!debugEven || a % 2 !== 0) && (!debugOdd || a % 2 !== 1)) {
					if (!debugLeft) indexData.push([one, two, midFirst]);
					if (!debugRight) indexData.push([two, midSecond, midFirst]);
				}
				for (a=1; a<beamLengthVertexCount; a++) {
					const previousFirst = location + (a - 1);
					const previousSecond = nextLocation + (a - 1);
					const nextFirst = location + a;
					const nextSecond = nextLocation + a;
					if ((!debugEven || a % 2 !== 0) && (!debugOdd || a % 2 !== 1)) {
						if (!debugLeft) indexData.push([previousSecond, nextFirst, previousFirst]);
						if (!debugRight) indexData.push([previousSecond, nextSecond, nextFirst]);
					}
				}
			}
		}

		if (!debugLast && plotFancy && sphereFraction !== "whole" && splitBeams) for (let i=0; i<intersectionAreaRings; i++) { // last beam ends
			const three = (rings + i) * (slices + 1) + slices;
			const four = (rings + i + 1) * (slices + 1) + slices;
			const lastTip = tips + fullBeamCount;
			if (!extraFancy) {
				indexData.push([four, three, lastTip]); // beam end
			} else {
				let location = extraFancyStart + (slices + lastEdgeCount) * beamLengthVertexCount * 2;
				if (i) location = lastBeamEndsStart + (i-1)*beamLengthVertexCount;
				let nextLocation = lastBeamEndsStart + i*beamLengthVertexCount;
				// temporarily disabled again
				//if (i === intersectionAreaRings-1) nextLocation = extraFancyStart + (slices + lastEdgeCount) * beamLengthVertexCount * 2 + beamLengthVertexCount; // last line is the underside
				let a = 0;
				const midFirst = location + a;
				const midSecond = nextLocation + a;
				if ((!debugEven || a % 2 !== 0) && (!debugOdd || a % 2 !== 1)) {
					if (!debugLeft) indexData.push([four, three, midFirst]);
					if (!debugRight) indexData.push([midSecond, four, midFirst]);
				}
				for (a=1; a<beamLengthVertexCount; a++) {
					const previousFirst = location + (a - 1);
					const previousSecond = nextLocation + (a - 1);
					const nextFirst = location + a;
					const nextSecond = nextLocation + a;
					if ((!debugEven || a % 2 !== 0) && (!debugOdd || a % 2 !== 1)) {
						if (!debugLeft) indexData.push([nextFirst, previousSecond, previousFirst]);
						if (!debugRight) indexData.push([nextSecond, previousSecond, nextFirst]);
					}
				}
			}
		}

		if (sphereFraction !== "whole") for (let i=0; i<rings+intersectionAreaRings; i++) { // sun ends
			const first = i * (slices + 1);
			const second = first + slices + 1;
			indexData.push([anchor, second, first]);
		}
		if (sphereFraction !== "whole") for (let i=0; i<rings+intersectionAreaRings; i++) { // other slice
			const j = slices;
			const first = i * (slices + 1) + j;
			const second = first + slices + 1;
			indexData.push([anchor, first, second]);
		}
		if (!debugBase) for (let j=0; j<slices; j++) { // original sun bottom, without beams
			const first = sunUndersideStart + j;
			const second = first + 1;
			if (fakeExtrude && baseHeight > 0 && sphereFraction === "whole") indexData.push([underAnchorLoc, second, first]);
			else if (fakeExtrude && baseHeight > 0) indexData.push([pedestalStart, second, first]);
			else indexData.push([anchor, second, first]);
		}

		if (fakeExtrude && baseHeight > 0) { // pedestal sides
			const length = bottomFaceIndices.length;
			for (let i=0; i<length-1; i++) {
				const topVertex = bottomFaceIndices[i];
				const bottomVertex = pedestalStart + i;
				const nextTopVertex = bottomFaceIndices[i+1];
				const nextBottomVertex = pedestalStart + i + 1;
				if (!debugLeft) indexData.push([topVertex, bottomVertex, nextTopVertex]);
				if (!debugRight) indexData.push([bottomVertex, nextBottomVertex, nextTopVertex]);
			}
		}

		//deepFreeze(indexData);
		return indexData;
	}
);

export const meshSelector = createSelector(
	[sunVerticesSelector, sunIndicesSelector, baseHeightSelector],
	(sunVertices, sunIndices,baseHeight) => {
		const cells = sunIndices;
		const mesh = new Mesh();
		const sunVerticesResult = sunVertices.map( item => item.slice(0) );
		mesh.setPositions(sunVerticesResult);
		const cellsResult = cells.map( item => item.slice(0) );
		mesh.setCells(cellsResult);
		mesh.process();
		const shift = vec3.create();
		vec3.set(shift, 0, 0, -baseHeight);
		move(mesh,shift); // Mutates!
		return mesh;
	}
);