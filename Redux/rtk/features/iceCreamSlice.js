const { cakeActions } = require("./cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
	iceCreams: 20,
};

const iceCreamSlice = createSlice({
	name: "iceCream",
	initialState,
	reducers: {
		ordered: state => {
			state.iceCreams -= 1;
		},
		restoked: (state, action) => {
			state.iceCreams += action.payload;
		},
	},
	/*
	extraReducers: {
		["cake/ordered"]: state => {
			state.iceCreams -= 1;
		},
	},
   */
	extraReducers: builder => {
		builder.addCase(cakeActions.ordered, state => {
			state.iceCreams -= 1;
		});
	},
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
