import { configureStore } from "@reduxjs/toolkit";

// Import the reducers
import counterReducer from "../features/counter/counterSlice.js";

// Create the redux store using configureStore
const store = configureStore({
  // Pass the reducers to the store as an argument
  reducer: {
    /**
     * Add the reducers here
     * If have multiple reducers, add them the same way.
     * The key names in the object is the keys in our final state value */
    counter: counterReducer,
  },
});

export default store;

/**
 * Can do the same thing using combineReducers as well

    const rootReducer = combineReducers({
        // Add the reducers here
        // If have multiple reducers, add them the same way.
        users: usersReducer,
        posts: postsReducer,
        comments: commentsReducer
    });

    // Now we can just pass the root reducer to the store
    const store = configureStore({
        reducer: rootReducer
    })
 */
