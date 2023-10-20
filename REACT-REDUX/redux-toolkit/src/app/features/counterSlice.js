import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	count: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state, action) => {
			state.count += action.payload;
		},
		decrement: state => {
			if (state.count > 0) {
				state.count -= 1;
			}
		},
	},
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
