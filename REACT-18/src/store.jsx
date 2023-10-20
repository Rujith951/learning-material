const initialState = {
	balance: 0,
	fullName: "",
	mobile: null,
};

function accountReducer(state = initialState, action) {
	if (action.type === "deposite")
		return { ...state, balance: state.balance + action.payload };
	if (action.type === "withdraw")
		return { ...state, balance: state.balance + action.payload };
	if (action.type === "mobileUpdate")
		return { ...state, balance: state.balance + action.payload };
	if (action.type === "nameUpdate")
		return { ...state, balance: state.balance + action.payload };
}

dispatch({ type: "deposite", payload: "" });
dispatch({ type: "withdraw", payload: "" });
dispatch({ type: "mobileUpdate", payload: "" });
dispatch({ type: "nameUpdate", payload: "" });
dispatch({ type: "deposite", payload: "" });
