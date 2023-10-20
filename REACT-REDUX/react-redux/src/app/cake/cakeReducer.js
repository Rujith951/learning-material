import { BUY_CAKE, RESTORE_CAKE } from "./cakeActions";

const initialCakeState = {
	numOfCakes: 10,
};

export default function cakeReducer(state = initialCakeState, action) {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - action.payload,
			};
		case RESTORE_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes + action.payload,
			};

		default:
			return state;
	}
}
