import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../app/features/valueSlice";

const Value = () => {
	const value = useSelector(state => state.value);
	const dispatch = useDispatch();
	return (
		<div>
			<div>
				<h1>Value : {value.value}</h1>
				<button
					className="h-8 w-80 bg-yellow-700"
					onClick={() => dispatch(increment())}
				>
					increment
				</button>
				<button
					className="h-8 w-80 bg-yellow-900"
					onClick={() => dispatch(decrement())}
				>
					decrement
				</button>
			</div>
		</div>
	);
};

export default Value;
