import React, { useReducer } from "react";

function reducer(state, action) {
	if (action.type == "ADD") return { count: state.count + action.payload };
	if (action.type == "SUB")
		return state.count > 0
			? { count: state.count - action.payload }
			: { count: state.count };
}

/////Actions

//////// Action creators
const add = () => {
	return { type: "ADD", payload: 1 };
};
const sub = () => {
	return { type: "SUB", payload: 1 };
};

const ReducerPac = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	function Add() {
		dispatch(add());
	}
	function Sub() {
		dispatch(sub());
	}
	return (
		<div>
			<button onClick={Add}>Add</button>
			<h1>{state.count}</h1>
			<button onClick={Sub}>Sub</button>
		</div>
	);
};

export default ReducerPac;
