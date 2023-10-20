const redux = require("redux");
const axios = require("axios");
const reduxThunk = require("redux-thunk");
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();
const thunkMiddleware = reduxThunk.default;

/* store object */
const initialState = {
	loading: false,
	data: [],
	error: "",
};

/* action types */
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

/* synchronous action creators. */
function fetchUsersRequest() {
	return {
		type: FETCH_USERS_REQUEST,
	};
}

function fetchUsersSuccess(users) {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	};
}

function fetchUsersFailure(error) {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
}

function reducer(state = initialState, action) {
	if (action.type === FETCH_USERS_REQUEST) {
		return {
			...state,
			loading: true,
		};
	}

	if (action.type === FETCH_USERS_SUCCESS) {
		return {
			...state,
			loading: false,
			users: action.payload,
			error: false,
		};
	}

	if (action.type === FETCH_USERS_FAILURE) {
		return {
			...state,
			loading: false,
			users: [],
			error: action.payload,
		};
	}

	return initialState;
}

/* Async Action Creator. */
const fetchUsers = () => {
	/* it is an impure functiona and can have api calls. 
   
      it receives dispatch as an arg.
   */
	return function (dispatch) {
		dispatch(fetchUsersRequest());
		axios
			.get("https://jsonplaceholder.typicode.com/users/")
			.then(response => {
				// response.data is the array of users.
				dispatch(fetchUsersSuccess(response.data.map(user => user.id)));
			})
			.catch(err => {
				// error.message is the error description
				dispatch(fetchUsersFailure(err.message));
			});
	};
};

const rootReducer = redux.combineReducers({
	state: reducer,
});

const store = redux.createStore(
	rootReducer,
	redux.applyMiddleware(logger, thunkMiddleware)
);

console.log("initialStoreState", store.getState());
store.dispatch(fetchUsers());
