import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import valueReducer from "./features/valueSlice";
import shopSlice from "./features/shopSlice";

import logger from "redux-logger";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		value: valueReducer,
		shop: shopSlice,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
