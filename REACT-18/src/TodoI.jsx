import React, { useEffect, useState } from "react";

const data = JSON.parse(localStorage.getItem("data"));
console.log(data);

const TodoI = () => {
	const [todos, setTodos] = useState(data ?? []);
	const [text, setText] = useState("");

	useEffect(() => {
		localStorage.setItem("data", JSON.stringify(todos));
	}, [todos]);

	const handletodos = () => {
		if (text !== "")
			setTodos(prev => [
				...prev,
				{
					text: text,
					check: false,
					id: Date.now(),
				},
			]);
		setText("");
	};

	const handleDelete = id => {
		let Dcopy = JSON.parse(JSON.stringify(todos));
		let deletedtodo = Dcopy.filter(itm => itm.id !== id);
		setTodos(deletedtodo);
	};

	const handlecheck = id => {
		let todosCopy = JSON.parse(JSON.stringify(todos));
		let checkedtodos = todosCopy.map(itm => {
			if (itm.id == id) {
				itm.check = !itm.check;
			}
			return itm;
		});
		console.log(checkedtodos);
		setTodos(checkedtodos);
	};

	return (
		<div className="h-4/5 w-3/5 shadow-2xl">
			<div className="flex md:justify-around sm:justify-between shadow-lg">
				<input
					className="outline-none h-8 border-2 rounded-lg md:w-80 sm:w-60 "
					type="text"
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<button
					className="h-8 w-32 sm:w-24 rounded-lg bg-blue-600 text-white"
					onClick={handletodos}
				>
					ADD
				</button>
			</div>
			<div className="space-y-2 pt-5 sm:space-y-1">
				{todos.map(item => (
					<div key={item.id} className="flex justify-between">
						<div className="flex w-4/5 justify-between">
							<div className="w-1/6 flex justify-center items-center">
								<input
									className="w-4 h-4"
									type="checkbox"
									// value={item.check}
									onClick={() => handlecheck(item.id)}
								/>
							</div>
							<div className="w-5/6 shadow-lg flex items-center">
								<h2>{item.text}</h2>
							</div>
						</div>
						<button
							style={{ display: item.check == true ? "block" : "none" }}
							className="text-red-700"
							onClick={() => handleDelete(item.id)}
						>
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default TodoI;
