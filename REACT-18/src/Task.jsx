import React, { useEffect } from "react";
import { useState } from "react";

const data = JSON.parse(localStorage.getItem("data"));

const Task = () => {
	const [state, setState] = useState(data ?? []);
	const [text, setText] = useState("");

	useEffect(() => {
		if (state.length != 0) {
			localStorage.setItem("data", JSON.stringify(state));
		}
	}, [state]);

	const handletodo = () => {
		if (text !== "") {
			setState(prev => [
				...prev,
				{
					text: text,
					check: false,
					id: Date.now(),
				},
			]);
			setText("");
		}
	};
	const handledelete = id => {
		let copystate = JSON.parse(JSON.stringify(state));
		let filteredstate = copystate.filter(itm => itm.id !== id);
		setState(filteredstate);
	};
	const handlecheck = id => {
		let statecopy = structuredClone(state);

		let matcheditm = statecopy.find(itm => {
			return itm.id === id;
		});

		if (matcheditm) {
			matcheditm.check = !matcheditm.check;
		}

		// let mappedstate = statecopy.map(itm => {
		// 	if (itm.id == id) {
		// 		itm.check = !itm.check;
		// 	}
		// 	return itm;
		// });
		// statecopy.forEach(itm => {
		// 	if (id == itm.id) {
		// 		itm.check = !itm.check;
		// 	}
		// });
		setState(statecopy);
	};

	return (
		<div className="h-4/5 w-2/5 rounded-xl shadow-2xl">
			<div className="h-1/4  flex justify-around items-center shadow-lg">
				<input
					type="text"
					value={text}
					onChange={e => setText(e.target.value)}
					className="h-8 w-80 rounded-lg outline-none shadow-lg border-t-2"
				/>
				<button
					onClick={handletodo}
					className="h-8 w-24 rounded-md flex items-center justify-center text-white bg-blue-600 outline-none"
				>
					ADD TODO
				</button>
			</div>
			<div className="space-y-3 pt-5">
				{state.map(item => (
					<div
						key={item.id}
						className="flex justify-between h-6 shadow-md border-b-2"
					>
						<h2
							style={{ textDecoration: item.check ? "line-through" : "none" }}
							className="w-5/6"
						>
							{item.text}
						</h2>
						<div className="w-2/6 flex justify-between ">
							<h2
								className="cursor-pointer"
								onClick={() => handlecheck(item.id)}
								style={{
									color: item.check ? "green" : "black",
								}}
							>
								check
							</h2>
							<h2>edit</h2>
							<h2
								onClick={() => handledelete(item.id)}
								className="text-red-700"
							>
								delete
							</h2>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Task;
