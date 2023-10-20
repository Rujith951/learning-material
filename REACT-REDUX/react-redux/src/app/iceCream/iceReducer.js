import { BUY_ICECREAM, RESTORE_ICECREAM } from "./iceCreamActions";

const initialIceCreamState = {
	numOfIceCreams: 10,
};

function iceReducer(state = initialIceCreamState, action) {
	switch (action.type) {
		case BUY_ICECREAM:
			if (state.numOfIceCreams > 10) {
				return {
					...state,
					numOfIceCreams: state.numOfIceCreams - action.payload,
				};
			}
		case RESTORE_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams + action.payload,
			};

		default:
			return state;
	}
}

export default iceReducer;
