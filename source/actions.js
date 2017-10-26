//import { PUSH } from 'redux-little-router';


export const UNDO = "UNDO";
export const REDO = "REDO";

export const RESIZE_DIVIDER = "RESIZE_DIVIDER";
export const SET_DRAGGING_DIVIDER = "SET_DRAGGING_DIVIDER";

export const CHANGE_WORLD_ROTATION = "CHANGE_WORLD_ROTATION";
export const CHANGE_CAMERA_ORIENTATION = "CHANGE_CAMERA_ORIENTATION";
export const RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION = "RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION";

export const DISCLOSURE_TOGGLE = "DISCLOSURE_TOGGLE";

export const CHANGE_SETTING = "CHANGE_SETTING";

export const INITIALIZE_PART_ONE = "INITIALIZE_PART_ONE";
export const INITIALIZE_PART_TWO = "INITIALIZE_PART_TWO";

const undoable = true; // registers change for undo
const preserve = true; // gets registered , but only by a different, undoable action.
const coalesce = true; // coalesce undo registration
const continuous = true; // disable URL queryState updates // if true, controls don't update queryState, until you dispatch false. // not used, but changeSetting allows passing options to override, for the bezier control (Safari will throw an error if replaceState is called 100 times in 30 seconds)

export function undo() {
	return {
		type: UNDO
	};
}

export function redo() {
	return {
		type: REDO
	};
}

export function resizeDivider(value) {
	return {
		type: RESIZE_DIVIDER,
		value,
		preserve
	};
}

export function setDraggingDivider(draggingDivider) {
	return {
		type: SET_DRAGGING_DIVIDER,
		draggingDivider
	};
}

export function changeWorldRotation(value) {
	return {
		type: CHANGE_WORLD_ROTATION,
		value,
		preserve
	};
}

export function changeCameraOrientation(value) {
	return {
		type: CHANGE_CAMERA_ORIENTATION,
		value,
		preserve
	};
}

export function resetWorldRotationAndCameraOrientation() {
	return {
		type: RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION,
		preserve
	};
}

export function disclosureToggle(nodeId) {
	return {
		type: DISCLOSURE_TOGGLE,
		nodeId,
		preserve
	};
}

export function changeSetting(nodeId,value,options) { // nodeId can be an array for multiple values // No longer has multiple selection, but now values can be an array too, for changing bezier x & y. // options are for suppressing continuous controls from calling replaceState repeatedly and throwing an error in Safari for too much activity
	const result = {
		type: CHANGE_SETTING,
		nodeId,
		value,
		undoable,
		coalesce
	};
	if (options) {
		Object.keys(options).forEach(key => {
			result[key] = options[key];
		});
	}
	return result;
}

export function initializePartOne() {
	return {
		type: INITIALIZE_PART_ONE
	}
}

export function initializePartTwo(data) {
	return {
		type: INITIALIZE_PART_TWO,
		data
	}
}
