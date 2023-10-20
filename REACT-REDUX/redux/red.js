const loggerMiddleware = require("redux-logger").createLogger();
const thunkMiddleware = require("redux-thunk").default;
const redux = require("redux");
const axios = reauire("axios");

// cake state

const initialCakeState = {
	Cakes: 10,
};

//ice cream state
const initialIceCreamState = {
	IceCream: 10,
};

// emsil
const initialState = {
	loading: false,
	email: "",
	error: "",
};

// cake actions

const BUY_CAKE = "BUY_CAKE";
const FILL_CAKE = "FILL_CAKE";

// ice cream actions

const BUY_ICE_CREAM = "BUY_ICE_CREAM";
const FILL_ICE_CREAM = "FILL_ICE_CREAM";

// email actions
const FETCH_EMAIL_STARTED = "FETCH_EMAIL_STARTED";
const FETCH_EMAIL_SUCCESS = "FETCH_EMAIL_SUCCESS";
const FETCH_EMAIL_FAILED = "FETCH_EMAIL_FAILED";
/* Synchronous Action Creators */
function fetchEmailStarted() {
	return { type: FETCH_EMAIL_STARTED };
}

function fetchEmailSuccess(email) {
	return { type: FETCH_EMAIL_SUCCESS, payload: email };
}

function fetchEmailFaied(error) {
	return { type: FETCH_EMAIL_FAILED, payload: error };
}

// cake action creaters
function buyCake(count) {
	return { type: "BUY_CAKE", payload: count };
}
function fillCake(count) {
	return { type: "FILL_CAKE", payload: count };
}
// icecream action creaters
function buyIceCream(count) {
	return { type: "BUY_ICE_CREAM", payload: count };
}
function fillIceCream(count) {
	return { type: "FILL_ICE_CREAM", payload: count };
}
// cakereducer
function CakeReducer(state = initialCakeState, action) {
	switch (action.type) {
		case BUY_CAKE:
			return { ...state, Cakes: state.Cakes - action.payload };
		case FILL_CAKE:
			return { ...state, Cakes: state.Cakes + action.payload };
		default:
			return state;
	}
}
// ice cream reducer
function IceCreamReducer(state = initialIceCreamState, action) {
	switch (action.type) {
		case BUY_ICE_CREAM:
			return { ...state, IceCream: state.IceCream - action.payload };
		case FILL_ICE_CREAM:
			return { ...state, IceCream: state.IceCream + action.payload };
		default:
			return state;
	}
}

// email
function reducer(state = initialState, action) {}

function FetchDetails() {
	const URL = "https://jsonplaceholder.typicode.com/user/1";

	return function () {};
}

const rootReducer = redux.combineReducers({
	cake: CakeReducer,
	iceCream: IceCreamReducer,
});

const store = redux.createStore(
	rootReducer,
	redux.applyMiddleware(thunkMiddleware, loggerMiddleware)
);

/*
store.subscribe(() => {
	console.log(store.getState());
});
*/

store.dispatch(buyIceCream(6));
store.dispatch(fillIceCream(3));
store.dispatch(buyCake(4));
store.dispatch(fillCake(4));
