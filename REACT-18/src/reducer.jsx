import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
	if (action.type === "ADD") return { count: state.count + action.payload };
	if (action.type === "SUB")
		return state.count > 0
			? { count: state.count - action.payload }
			: { count: state.count };
}

function add() {
	return { type: "ADD", payload: 1 };
}
function sub() {
	return { type: "SUB", payload: 1 };
}

function Reducer() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	console.log(state);

	function Add() {
		dispatch(add());
	}
	function Sub() {
		dispatch(sub());
	}

	return (
		<div className="space-y-5">
			<h1 className="h-16 w-16 flex justify-center items-center bg-gray-800 text-white">
				{state.count}
			</h1>

			<button onClick={Add} className="h-8 w-32 bg-green-800 text-white">
				Add
			</button>
			<button onClick={Sub} className="h-8 w-32 bg-green-800 text-white block ">
				Sub
			</button>
		</div>
	);
}

export default Reducer;
