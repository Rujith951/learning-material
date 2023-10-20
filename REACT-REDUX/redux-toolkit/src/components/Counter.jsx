import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/CounterSlice";

const Counter = () => {
	const countState = useSelector(state => state.counter);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>{countState.count}</h1>
			<button
				className="h-8 w-80 bg-red-500"
				onClick={() => dispatch(increment(Math.floor(Math.random() * 100)))}
			>
				increment
			</button>
			<button
				className="h-8 w-80 bg-blue-500"
				onClick={() => dispatch(decrement())}
			>
				decrement
			</button>
		</div>
	);
};

export default Counter;
