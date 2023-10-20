import { createStore, applyMiddleware, combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import loggerMiddleware from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import iceReducer from "./iceCream/iceReducer";
import shopReducer from "./shop/shopReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	cake: cakeReducer,
	ice: iceReducer,
	shop: shopReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(loggerMiddleware, thunk))
);
