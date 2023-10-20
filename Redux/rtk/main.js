const store = require("./app/store");
const { cakeActions } = require("./features/cakeSlice");
const { iceCreamActions } = require("./features/iceCreamSlice");
const { fetchUsers } = require("./features/userSlice");

console.log("initial", store.getState());
store.subscribe(() => {});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restoked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restoked(3));
