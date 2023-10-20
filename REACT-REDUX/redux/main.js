const redux = require("redux");
const loggerMiddleware = require("redux-logger").createLogger();

/* cake state */
const initialCakeState = {
	numOfCakes: 10,
};
const initialIceCreamState = {
	numOfIceCreams: 10,
};
/* cake actions */
const BUY_CAKE = "BUY_CAKE";
const RESTORE_CAKE = "RESTORE_CAKE";
/* icrecream actions */
const BUY_ICECREAM = "BUY_ICECREAM";
const RESTORE_ICECREAM = "RESTORE_ICECREAM";
/* cake action creators */
function buyCake(count) {
	return { type: BUY_CAKE, payload: count };
}
function restoreCake(count) {
	return { type: RESTORE_CAKE, payload: count };
}
/* ice cream creators */
function buyIceCream(count) {
	return { type: BUY_ICECREAM, payload: count };
}
function restoreIceCream(count) {
	return { type: RESTORE_ICECREAM, payload: count };
}
/* CakeReducer */
function cakeReducer(state = initialCakeState, action) {
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
/* Ice Cream Reducer */
function iceCreamReducer(state = initialIceCreamState, action) {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - action.payload,
			};
		case RESTORE_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams + action.payload,
			};

		default:
			return state;
	}
}

/* Store */

const rootReducer = redux.combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});

const store = redux.createStore(
	rootReducer,
	redux.applyMiddleware(loggerMiddleware)
);

store.dispatch(buyCake(5));
store.dispatch(restoreCake(3));

store.dispatch(buyIceCream(6));
store.dispatch(restoreIceCream(5));
