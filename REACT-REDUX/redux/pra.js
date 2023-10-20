const redux = require("redux");
const axios = require("axios");
const loggerMiddleware = require("redux-logger").createLogger();
const thunkMiddleware = require("redux-thunk").default;

// initial state
const initialState = {
	loading: false,
	data: {},
	error: "",
};

// Actions
const FETCH_DATA_STARTED = "FETCH_DATA_STARTED";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";
// get each item

const FETCH_ALL_PRODUCTS = "FETCH_ALL_PRODUCTS";

// syncronus action creators
function FetchDataStarted() {
	return { type: FETCH_DATA_STARTED };
}
function FetchDataSuccess(data) {
	return { type: FETCH_DATA_SUCCESS, payload: data };
}
function FetchDataFailed(error) {
	return { type: FETCH_DATA_FAILED, payload: error };
}

function FetchAllProducts(data) {
	return { type: FETCH_ALL_PRODUCTS, payload: data };
}

// asyncronus action creator function

function datarelated() {
	return function (dispatch) {
		const URL = "https://fakestoreapi.com/products/1";
		dispatch(FetchDataStarted());

		axios
			.get(URL)
			.then(res => dispatch(FetchDataSuccess(res.data)))
			.catch(error => dispatch(FetchDataFailed("error occured")));
	};
}

function AllData() {
	return function (dispatch) {
		const URL = "https://fakestoreapi.com/products";
		axios
			.get(URL)
			.then(res => dispatch(FetchAllProducts(res.data.slice(0, 1))))
			.catch(err => {
				dispatch({ type: "ERROR", payload: "error occurred" });
			});
	};
}

// reducer function
function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_DATA_STARTED:
			return { ...state, loading: true };
		case FETCH_DATA_SUCCESS:
			return { ...state, data: action.payload, loading: false };
		case FETCH_DATA_FAILED:
			return { ...state, error: action.payload, loading: false };
		case FETCH_ALL_PRODUCTS:
			return { ...state, data: action.payload, loading: false };
		case "ERROR":
			return { ...state, error: action.payload };
		default:
			return state;
	}
}

const store = redux.createStore(
	reducer,
	redux.applyMiddleware(thunkMiddleware, loggerMiddleware)
);
// store.dispatch(datarelated());
store.dispatch(AllData());
