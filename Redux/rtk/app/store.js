const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cakeSlice");
const iceCreamReducer = require("../features/iceCreamSlice");
const userReducer = require("../features/userSlice");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const store = configureStore({
	reducer: {
		cake: cakeReducer,
		iceCream: iceCreamReducer,
		user: userReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

module.exports = store;
