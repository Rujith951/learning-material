import React, { useRef, useState } from "react";

const Task2 = () => {
	const [todos, setTodos] = useState([]);
	// console.log(todos);
	const [text, setText] = useState("");
	const [visible, setVisible] = useState(false);
	const [text2, setText2] = useState("");

	const clickTodoid = useRef(null);

	const Settodo = () => {
		setTodos(prve => [
			...prve,
			{
				text: text,
				check: false,
				id: Date.now(),
			},
		]);
		setText("");
	};

	const DelItm = id => {
		let copytodos = todos.slice();
		let filteredTodos = copytodos.filter(itm => itm.id != id);
		setTodos(filteredTodos);
		// console.log(filteredTodos);
	};

	const CheckItm = id => {
		let todosCopy = JSON.parse(JSON.stringify(todos));

		let checkedItm = todosCopy.map(itm => {
			if (itm.id == id) {
				itm.check = !itm.check;
			}
			return itm;
		});

		setTodos(checkedItm);
	};

	const handleEdit = id => {
		setVisible(prev => !prev);
		clickTodoid.current = id;
	};

	const ChangeTText = () => {
		let todosC = todos.slice();
		let restodos = todosC.map(itm => {
			if (itm.id == clickTodoid.current) {
				itm.text = text2;
			}
			return itm;
		});
		setTodos(restodos);
		setText2("");
		setVisible(false);
	};

	return (
		<div className="h-[400px] w-[400px]  mt-20 shadow-2xl relative">
			<div
				className={`${
					visible ? "visible" : "invisible"
				} h-32 w-60 top-20 left-20 bg-slate-500 absolute p-5 rounded-md space-y-5 `}
			>
				<input
					value={text2}
					onChange={e => setText2(e.target.value)}
					className="w-full rounded-md outline-none shadow-md"
					type="text"
				/>
				<div className="flex justify-center items-center">
					<button
						onClick={ChangeTText}
						className="h-6 w-16 bg-slate-700 text-white rounded-md"
					>
						Change
					</button>
				</div>
			</div>
			<div className="h-[60px]  flex items-center  justify-around border-b-2">
				<input
					type="text"
					className="h-7 rounded-md outline-none bg-slate-500 text-white"
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<button
					className="h-7 rounded-md w-20 bg-slate-600 text-white"
					onClick={Settodo}
				>
					AddTodo
				</button>
			</div>
			<div className="h-[340px] p-1 pt-3 overflow-y-scroll space-y-2">
				{todos.map((itm, ind) => (
					<div key={ind} className="flex justify-between h-7  shadow-xl">
						<h1 className={`${itm.check ? "line-through" : null} w-[300px]`}>
							{itm.text}
						</h1>
						<div className="flex flex-1 justify-between cursor-pointer">
							<h1 onClick={() => handleEdit(itm.id)}>Edi</h1>
							<h1
								className={`${
									itm.check ? "text-green-500" : "text-black"
								} cursor-pointer`}
								onClick={() => CheckItm(itm.id)}
							>
								Che
							</h1>
							<h1
								className="text-red-400 cursor-pointer "
								onClick={() => DelItm(itm.id)}
							>
								Del
							</h1>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Task2;

// console.log(Date.now());
