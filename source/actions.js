export const UNDO = "UNDO";
export const REDO = "REDO";

export const RESIZE_DIVIDER = "RESIZE_DIVIDER";
export const SET_DRAGGING_DIVIDER = "SET_DRAGGING_DIVIDER";
//export const CHANGE_SHAPE = "CHANGE_SHAPE";

export const CHANGE_WORLD_ROTATION = "CHANGE_WORLD_ROTATION";
export const CHANGE_CAMERA_ORIENTATION = "CHANGE_CAMERA_ORIENTATION";
export const RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION = "RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION";

export const DISCLOSURE_TOGGLE = "DISCLOSURE_TOGGLE";
export const SELECT_NODE = "SELECT_NODE";
export const EDIT_NODE = "EDIT_NODE";
export const CHANGE_TEXT = "CHANGE_TEXT";
export const SHIFT_KEY_PRESS = "SHIFT_KEY_PRESS";

export const CHANGE_SETTING = "CHANGE_SETTING";

const undoable = true;
const preserve = true;
const coalesce = true;

export function undo() {
	return{
		type: UNDO
	};
}

export function redo() {
	return{
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
	}
}

export function changeCameraOrientation(value) {
	return {
		type: CHANGE_CAMERA_ORIENTATION,
		value,
		preserve
	}
}

export function resetWorldRotationAndCameraOrientation() {
	return {
		type: RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION,
		preserve
	}
}

export function disclosureToggle(nodeId) {
	return {
		type: DISCLOSURE_TOGGLE,
		nodeId,
		preserve
	};
}

export function selectNode(nodeId) {
	return {
		type: SELECT_NODE,
		nodeId,
		preserve
	};
}

export function editNode(nodeId) {
	return {
		type: EDIT_NODE,
		nodeId,
		preserve
	};
}

export function changeText(nodeId,text) {
	return {
		type: CHANGE_TEXT,
		nodeId,
		text,
		undoable,
		coalesce
	};
}

export function shiftKeyPress(value) {
	return {
		type: SHIFT_KEY_PRESS,
		value
	};
}

export function changeSetting(nodeId,value) {
	return {
		type: CHANGE_SETTING,
		nodeId,
		value,
		undoable,
		coalesce
	}
}