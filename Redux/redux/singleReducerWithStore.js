const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

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

const initialState = {
	numOfCakes: 10,
	numOfIceCreames: 20,
};

function reducer(currState = initialState, action) {
	if (action.type === BUY_CAKE) {
		return {
			...currState,
			numOfCakes: currState.numOfCakes - 1,
		};
	}
	if (action.type === BUY_ICECREAM) {
		return {
			...currState,
			numOfIceCreames: currState.numOfIceCreames - 1,
		};
	}

	return currState;
}

const store = createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
	console.log("store updated", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
