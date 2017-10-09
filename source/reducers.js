import * as actions from "./actions.js";
import * as selectors from "./selectors.js";
import { presets } from "./presets.js";
import deepFreeze from "deep-freeze";


function processPresets(values) {
	const topLevelIds = [];
	const result = {
		0: {
			childIds:topLevelIds
		}
	};
	values.forEach( item => {
		topLevelIds.push(item.id);
		processPreset(item,result);
	});
	return result;
}
function processPreset(value,result) {
	const key = value.id;
	const childIds = [];
	if (value.type === "group") {
		value.default.forEach( item => {
			childIds.push(item.id);
			processPreset(item,result);
		});
		result[key] = {
			id: key,
			value: value.displayName,
			type: value.type,
			name: value.displayName,
			childIds:childIds
		};
	} else if (value.type === "bezier") {
		value.default.forEach( item => {
			childIds.push(item.id);
			processPreset(item,result);
		});
		const controlKey = value.id + "control";
		result[controlKey] = {
			id: controlKey,
			value: value.displayName,
			type: value.type,
			name: value.displayName,
			choiceIds:childIds
		};
		result[key] = {
			id: key,
			value: value.displayName,
			type: "array",
			name: value.displayName,
			childIds:[controlKey],
			choiceIds:childIds
		};
	} else { // not a group
		result[key] = Object.assign({
			name: value.displayName,
			value: value.default
		}, value);
	}
}

const initialTreeDict = processPresets(presets);

function idSorter(flattenedIds) {
	return (a,b) => {
		const A = flattenedIds.indexOf(a);
		const B = flattenedIds.indexOf(b);
		return A - B;
	};
}

export function main(state={}, initialAction) {
	const modifiedAction = Object.assign({ state }, initialAction);
	const result = {
		// required:
		action: initialAction,
		history: history(state.history, modifiedAction),
		// preservables:
		now: now(state.now, modifiedAction),
		// custom:
		draggingDivider: draggingDivider(state.draggingDivider, modifiedAction)
	};
	deepFreeze(result);
	return result;
}
function undoables(present={}, action) {
	return {
		// preservables:
		before: before(present.before, action),
		after: after(present.after, action),
		// custom:
		normalizedTreeDict: normalizedTreeDict(present.normalizedTreeDict, action)
	};
}
function preservables(now={}, action) {
	return {
		// custom:
		collapsedIds: collapsedIds(now.collapsedIds, action),
		editingId: editingId(now.editingId, action), // Editing state probably doesn"t belong anywhere in here.
		dividerRatio: dividerRatio(now.dividerRatio, action),
		
		worldRotation: worldRotation(now.worldRotation, action),
		cameraOrientation: cameraOrientation(now.cameraOrientation, action)
	};
}

function before(state, action) {
	const previousState = action.state;
	if (action.undoable) return previousState.now;
	if (previousState && previousState.history) return previousState.history.present.before;
	return preservables(state, action);
}
function after(state, action) {
	const previousState = action.state;
	if (action.undoable) return preservables(previousState.now, action);
	if (previousState && previousState.history) return previousState.history.present.after;
	return preservables(state, action);
}
function now(state, action) {
	if (action.type === actions.UNDO) return action.state.history.present.before; // take you to where you were right before you made the change
	if (action.type === actions.REDO) return action.state.history.future[0].after; // take you to where you were right after you made the change
	return preservables(state, action);
}

function initialHistory() {
	return {
		past: [],
		present: undoables(undefined, {}),
		future: []
	};
}

function history(state = initialHistory(), action) {
	const { past, present, future } = state;
	const isPreserving = action.preserve;
	const previousState = action.state;
	const previousAction = previousState.action;
	const isCoalescing = (action.coalesce && previousAction && previousAction.type === action.type);

	if (action.type === actions.UNDO) return {
		past: past.slice(0, past.length - 1),
		present: past[past.length - 1],
		future: [ present, ...future ]
	};

	if (action.type === actions.REDO) return {
		past: [ ...past, present ],
		present: future[0],
		future: future.slice(1)
	};

	if (isCoalescing || isPreserving) return {
		past,
		present: undoables(present, action),
		future
	};

	if (action.undoable) return {
		past: [ ...past, present ],
		present: undoables(present, action),
		future: []
	};

	return state;
}


function draggingDivider(state,action) {
	if (action.type === actions.SET_DRAGGING_DIVIDER) {
		return action.draggingDivider;
	}
	return state;
}
function dividerRatio(state = 0.25, action) {
	if (action.type === actions.RESIZE_DIVIDER) return action.value;
	return state;
}

const zeroWorldRotation = [0,0,0,0];
function worldRotation(state = zeroWorldRotation, action) {
	if (action.type === actions.CHANGE_WORLD_ROTATION) return action.value.slice(0);
	if (action.type === actions.RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION) return zeroWorldRotation;
	return state;
}

const zeroCameraOrientation = [0,0,-50];
function cameraOrientation(state = zeroCameraOrientation, action) {
	if (action.type === actions.CHANGE_CAMERA_ORIENTATION) return action.value.slice(0);
	if (action.type === actions.RESET_WORLD_ROTATION_AND_CAMERA_ORIENTATION) return zeroCameraOrientation;
	return state;
}



function normalizedTreeDict(state = initialTreeDict, action) {
	const { nodeId, parentId } = action;
	const source = state;

	if (typeof nodeId === "undefined") return source;
	
	const normalizedTreeDict = {};
	Object.keys(source).forEach( key => {
		normalizedTreeDict[key] = source[key];
	});

	if (Array.isArray(nodeId)) { // Some actions affect a single node, other actions affect the selection, this might benefit from a refactoring
		nodeId.forEach( (id,index) => {
			const subAction = Object.assign({}, action, {nodeId:id, multipleSelectionIndex:index});
			normalizedTreeDict[id] = treeNode(source[id], subAction);
			if (typeof parentId !== "undefined") normalizedTreeDict[parentId[index]] = parentNode(source[parentId[index]], subAction); // if nodeId is array parentId is guaranteed to also be an array
		});
	} else {
		const node = source[nodeId];
		if (node.type === "array") {
			const array = action.value.split(",").map(parseFloat);
			const choiceIds = node.choiceIds;
			choiceIds.forEach( (id,index) => {
				const subAction = Object.assign({},action,{ nodeId: id, value:array[index] });
				normalizedTreeDict[id] = treeNode(source[id], subAction);
			});
		
		} else {
			normalizedTreeDict[nodeId] = treeNode(source[nodeId], action);
			if (typeof parentId !== "undefined") normalizedTreeDict[parentId] = parentNode(source[parentId], action);
		}
	}
	return normalizedTreeDict;
}

function parentNode(parent={ childIds:[] }, action) {
	return parent;
}

function treeNode(node = { childIds:[] }, action) {
	switch (action.type) {
		case actions.CHANGE_SETTING:
			return Object.assign({}, node, {
				value: action.value
			});
		default:
			return node;
	}
}


function collapsedIds(state = [], action) {
	if (action.type === actions.DISCLOSURE_TOGGLE) {
		const nodeId = action.nodeId;
		const collapsedIds = state.slice(0);
		const index = collapsedIds.indexOf(nodeId);
		if (index < 0) {
			collapsedIds.push(nodeId);
			const flattenedIds = selectors.flattenedIdsSelector(action.state);
			const sortFunction = idSorter(flattenedIds);
			collapsedIds.sort(sortFunction);
		} else {
			collapsedIds.splice(index,1);
		}
		return collapsedIds;
	}
	return state;
}

function editingId(state = -1,action) {
	if (action.type === actions.EDIT_NODE) return action.nodeId;
	return state;
}
