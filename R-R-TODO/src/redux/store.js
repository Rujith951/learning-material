import { createStore, combineReducers, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import todoReducer from "./Todo/TodoReducer";

const rootReducer = combineReducers({
	todo: todoReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(loggerMiddleware, thunk))
);

export default store;
