const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const RESTORE_CAKE = "RESTORE_CAKE";
const RESTORE_ICECREAM = "RESTORE_ICECREAM";

function buyCake() {
	return {
		type: BUY_CAKE,
	};
}

function buyIceCream() {
	return {
		type: BUY_ICECREAM,
	};
}

function restoreCake(n) {
	return {
		type: RESTORE_CAKE,
		payload: n,
	};
}

function restoreIceCream(n) {
	return {
		type: RESTORE_ICECREAM,
		payload: n,
	};
}

const initialCakeState = {
	numOfCakes: 10,
};

const initialIceCreamState = {
	numOfIceCreames: 20,
};

function cakeReducer(currState = initialCakeState, action) {
	if (action.type === BUY_CAKE) {
		return {
			...currState,
			numOfCakes: currState.numOfCakes - 1,
		};
	}
	if (action.type === RESTORE_CAKE) {
		return {
			...currState,
			numOfCakes: currState.numOfCakes + action.payload,
		};
	}

	return currState;
}

function iceCreamReducer(currState = initialIceCreamState, action) {
	if (action.type === BUY_ICECREAM) {
		return {
			...currState,
			numOfIceCreames: currState.numOfIceCreames - 1,
		};
	}
	if (action.type === RESTORE_ICECREAM) {
		return {
			...currState,
			numOfIceCreames: currState.numOfIceCreames + action.payload,
		};
	}

	/* extra reducers concept */
	if (action.type === BUY_CAKE)
		return {
			...currState,
			numOfIceCreames: currState.numOfIceCreames - 1,
		};

	return currState;
}

const rootReducer = redux.combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, redux.applyMiddleware(logger));

console.log("initial state", store.getState());
/*
store.subscribe(() => {
	const { cake, iceCream } = store.getState();
	console.log("cakes", cake.numOfCakes, "iceCream", iceCream.numOfIceCreames);
});
*/

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(restoreCake(3));

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(restoreIceCream(3));
