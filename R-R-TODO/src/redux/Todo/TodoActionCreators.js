import { ADD_TODO, CHECK_TODO, EDIT_TODO, REMOVE_TODO } from "./TodoActions";

export const addTodo = item => {
	return { type: ADD_TODO, payload: item };
};

export const removeTodo = id => {
	return { type: REMOVE_TODO, payload: id };
};

export const checkTodo = Ch_id => {
	return { type: CHECK_TODO, payload: Ch_id };
};

export const editTodo = list => {
	return { type: EDIT_TODO, payload: list };
};
