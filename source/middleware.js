import * as actions from "./actions.js";
import { parse, stringify } from "queryString";
import createHistory from "history/createBrowserHistory"

const history = createHistory()

export const logger = store => next => action => {
	const location = history.location
	if (action.type === actions.INITIALIZE_PART_ONE || action.type === actions.CHANGE_SETTING || action.type === actions.UNDO || action.type === actions.REDO) {
		const state = store.getState();
		let dict = state.history.present.normalizedTreeDict;
		if (action.type === actions.UNDO) {
			dict = state.history.past[state.history.past.length - 1].normalizedTreeDict;
		} else if (action.type === actions.REDO) {
			dict = state.history.future[0].normalizedTreeDict;
		}
		const finalData = {};
		Object.keys(dict).forEach(key => {
			if (key !== 0 && key !== "0" && !dict[key].childIds && dict[key].type !== "bezier") {
				let value = dict[key].value;
				finalData[key] = value;
			}
		});
		let changed = false;
		if (action.type === actions.INITIALIZE_PART_ONE) {
			let search = history.location.search;
			if (search.substring(0,1) === "?") { // shouldn't be necessary according to queryString.parse docs
				search = search.substring(1);
			}
			const initialData = parse(search);
			Object.keys(initialData).forEach(key => {
				if (key !== 0 && key !== "0" && !initialData[key].childIds && initialData[key].type !== "bezier") {
					let value = initialData[key];
					if (value === "true") value = true;
					if (value === "false") value = false;
					if (value !== dict[key]) changed = true;
					finalData[key] = value;
				}
			});
		}
		if (action.type === actions.CHANGE_SETTING) {
			finalData[action.nodeId] = action.value;
		}
		const query = "?" + stringify(finalData); // question mark shouldn't be necessary according to queryString.stringify docs
		const storage = undefined;
		history.replace(query, storage);
		if (changed) {
			const actionTwo = actions.initializePartTwo(finalData);
			next(actionTwo);
		} else next(action);
	} else next(action);
}
