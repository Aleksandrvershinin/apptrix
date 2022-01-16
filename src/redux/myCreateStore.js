import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
    authReducer,
    userReducer,
})

export function myCreateStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return store
}