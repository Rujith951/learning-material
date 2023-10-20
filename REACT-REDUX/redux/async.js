const axios = require("axios");
const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const loggerMiddleware = require("redux-logger").createLogger();

const initialState = {
	loading: false,
	email: "",
	error: "",
};

/* Actions */
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

/* Async Action Creator */
function fetchUserEmailAddress() {
	const URL = "https://jsonplaceholder.typicode.com/user/1";

	return function (dispatch) {
		dispatch(fetchEmailStarted()); /* */
		axios
			.get(URL)
			.then(res => {
				dispatch(fetchEmailSuccess(res.data.email)); /** */
			})
			.catch(err => {
				dispatch(fetchEmailFaied("fetch failed")); /** */
			});
	};
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_EMAIL_STARTED:
			return { ...state, loading: true };

		case FETCH_EMAIL_SUCCESS:
			return { ...state, loading: false, email: action.payload };

		case FETCH_EMAIL_FAILED:
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
}

const store = redux.createStore(
	reducer,
	redux.applyMiddleware(thunkMiddleware, loggerMiddleware)
);
store.dispatch(fetchUserEmailAddress());

/******
 *
 *
 *
 * 	adskmrk*77@
 *
 *
 */
