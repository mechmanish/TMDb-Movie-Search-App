import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

// By using applyMiddleware(thunk), we can  start dispatching actions asynchronously. 

export default store;