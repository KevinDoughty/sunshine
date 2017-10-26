import { h, render, createElement } from "preact";
//import { bind } from "decko";

//import { createStore } from "redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { Provider } from "preact-redux";
// Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(App)".
// import { Provider, createStore } from "redux"; 
// //import { Provider, createStore } from "preact-redux";

import App from "./components/App.js";
import { main } from "./reducers.js";

import { logger } from "./middleware.js";
import { initializePartOne } from "./actions.js";



const initialState = undefined;
//const store = createStore(main, initialState);
const store = createStore(main, initialState, applyMiddleware(logger));
store.dispatch(initializePartOne()); // "@@redux/INIT" is not detectable by middleware


render(
	(
		<Provider store={store} >
			<App />
		</Provider>
	), document.body
);