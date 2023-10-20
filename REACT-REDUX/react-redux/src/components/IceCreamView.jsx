import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIceCream, restoreIceCream } from "../app/iceCream/iceActionCretor";

function IceCreamView() {
	const [number, setNumber] = useState(1);
	const iceState = useSelector(state => state.ice);
	const dispatch = useDispatch();

	return (
		<div className="space-y-3">
			<h1 className="text-2xl font-semibold">
				NO OF IceCreams : {iceState.numOfIceCreams}
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
					dispatch(restoreIceCream(number));
					setNumber(1);
				}}
				className="bg-green-400 px-4 py-2 rounded-lg mr-5"
			>
				RESTORE iceCream
			</button>
			<button
				onClick={() => {
					dispatch(buyIceCream(number));
					setNumber(1);
				}}
				className="bg-slate-400 px-4 py-2 rounded-lg"
			>
				BUY iceCream
			</button>
		</div>
	);
}

export default IceCreamView;
