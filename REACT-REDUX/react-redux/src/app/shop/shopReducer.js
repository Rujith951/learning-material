import { DATA_LOADING, DATA_SUCCESS, ERROR } from "./shopActions";

const initialState = {
	loading: false,
	data: [],
	error: "",
};

function shopReducer(state = initialState, action) {
	switch (action.type) {
		case DATA_LOADING:
			return { ...state, loading: true };

		case DATA_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false,
				error: "",
			};
		case ERROR:
			return { ...state, error: "occured", loading: false };

		default:
			return state;
	}
}

export default shopReducer;
