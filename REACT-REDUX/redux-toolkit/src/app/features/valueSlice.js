import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

const valuSlice = createSlice({
	name: "value",
	initialState,
	reducers: {
		increment: state => {
			state.value += 1;
		},
		decrement: state => {
			if (state.value > 0) {
				state.value -= 1;
			}
		},
	},
});

export const { increment, decrement } = valuSlice.actions;

export default valuSlice.reducer;
