import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake, restoreCake } from "../app/cake/cakeActionCreator";

function CakeView() {
	const [number, setNumber] = useState(1);
	const cakeState = useSelector(state => state.cake);
	const dispatch = useDispatch();

	return (
		<div className="space-y-3">
			<h1 className="text-2xl font-semibold">
				NO OF CAKES : {cakeState.numOfCakes}
			</h1>
			<input
				type="number"
				name="number"
				id="number"
				value={number}
				onChange={e => setNumber(parseInt(e.target.value))}
				className="outline-none border-none"
				min={1}
			/>
			<button
				onClick={() => {
					dispatch(restoreCake(number));
					setNumber(1);
				}}
				className="bg-green-400 px-4 py-2 rounded-lg mr-5"
			>
				RESTORE CAKE
			</button>
			<button
				onClick={() => {
					dispatch(buyCake(number));
					setNumber(1);
				}}
				className="bg-slate-400 px-4 py-2 rounded-lg"
			>
				BUY CAKE
			</button>
		</div>
	);
}

export default CakeView;
