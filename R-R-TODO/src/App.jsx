import React, { useState } from "react";
import "./App.css";
import {
	HiArchiveBoxXMark,
	HiCheckCircle,
	HiPlusSmall,
	HiMiniPencilSquare,
} from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import {
	addTodo,
	checkTodo,
	editTodo,
	removeTodo,
} from "./redux/Todo/TodoActionCreators";

function App() {
	const todos = useSelector(state => state.todo.todos);
	console.log("todos", todos);
	const dispatch = useDispatch();
	const [text, setText] = useState("");
	const [visible, setVisible] = useState(false);
	const [text2, setText2] = useState("");
	const [Iid, setIid] = useState(null);

	const handleAddTodo = () => {
		dispatch(
			addTodo({
				title: text,
				check: false,
				id: Date.now(),
			})
		);
		setText("");
	};

	return (
		<div className="App">
			<div className="todoContainer">
				<div className="popup" id={`${visible ? "popupV" : "popupNV"}`}>
					<div className="one">
						<input
							type="text"
							value={text2}
							onChange={e => setText2(e.target.value)}
						/>
						<div className="popupAdd">
							<HiPlusSmall
								id="add"
								onClick={() => {
									dispatch(editTodo([Iid, text2]));
									setText2("");
									setVisible(false);
								}}
							/>
						</div>
					</div>
				</div>
				<div className="top">
					<input
						type="text"
						value={text}
						onChange={e => setText(e.target.value)}
					/>
					<div className="icon">
						<HiPlusSmall className="Addtodo" onClick={handleAddTodo} />
					</div>
				</div>
				<div className="bottom">
					{todos.map(item => (
						<div key={item.id} className="item">
							<div className="text">
								<h3
									className="title"
									style={{ textDecoration: item.check ? "line-through" : "" }}
								>
									{item.title}
								</h3>
							</div>
							<div className="checkdeleteedit">
								<HiMiniPencilSquare
									className="i"
									onClick={() => {
										setVisible(true);
										setIid(item.id);
									}}
								/>
								<HiCheckCircle
									id={`${item.check ? "checkT" : "checkF"}`}
									className="i"
									onClick={() => dispatch(checkTodo(item.id))}
								/>
								<HiArchiveBoxXMark
									className="i"
									style={{ color: "red" }}
									onClick={() => dispatch(removeTodo(item.id))}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
