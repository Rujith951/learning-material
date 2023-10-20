import { ADD_TODO, CHECK_TODO, EDIT_TODO, REMOVE_TODO } from "./TodoActions";

const initialState = {
	todos: [],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			if (action.payload.title !== "") {
				return {
					...state,
					todos: [...state.todos, action.payload],
				};
			}
		case REMOVE_TODO:
			const id = action.payload;
			return { todos: state.todos.filter(itm => itm.id !== id) };
		case CHECK_TODO:
			const Ch_id = action.payload;
			let todosCopy = structuredClone(state.todos);
			let matchedI = todosCopy.find(itm => itm.id == Ch_id);
			// console.log("matchedI", matchedI);
			if (matchedI) {
				matchedI.check = !matchedI.check;
			}
			return { todos: todosCopy };
		case EDIT_TODO:
			const list = action.payload;
			let todoCopy = structuredClone(state.todos);
			let matchedIT = todoCopy.find(itm => itm.id == list[0]);
			if (matchedIT) {
				matchedIT.title = list[1];
			}
			if (list[1] !== "") {
				return { todos: todoCopy };
			}

		default:
			return state;
	}
};

export default todoReducer;
