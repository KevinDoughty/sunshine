import { h, render, createElement } from "preact";
//import { bind } from "decko";

import { Provider } from "preact-redux";
import App from "./components/App.js";
import { main } from "./reducers.js";
import { createStore } from "redux";

// function addLoggingToDispatch(store) {
// 	const rawDispatch = store.dispatch;
// 	return (action) => {
// 		const result = rawDispatch(action);
// 		return result;
// 	};
// }

const initialState = undefined;
const store = createStore(main, initialState);

render(
	(
		<Provider store={store} >
			<App />
		</Provider>
	), document.body
);