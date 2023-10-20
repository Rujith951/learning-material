import React, { useReducer } from "react";

function reducer(state, action) {
	if (action.type === "Add") {
		return { count: state.count + action.payload };
	}
	if (action.type === "Sub") {
		return { count: state.count - action.payload };
	}
}

function Add() {
	return { type: "Add", payload: 1 };
}
function Sub() {
	return { type: "Sub", payload: 1 };
}

function CounterReducer() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	return (
		<div>
			<button onClick={() => dispatch(Add())}>Add</button>
			<h1>{state.count}</h1>
			<button onClick={() => dispatch(Sub())}>Sub</button>
		</div>
	);
}

export default CounterReducer;

/*

	- reducer => a function which handles how to update our current state and return it.
	- dispatch => a function which takes and object with keys 'type' and 'payload' {type: 'ACTION-NAME', payload: extra-info}
					** gives a signal to reducer func

	- ACTION TYPES eg: {ADD, SUB}
	- ACTION CREATORS - functions which creates and return {type:'', payload:''}

*/

/*

[
	{id:123, title: '', completed:false}
]

*/
