import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { userReducer } from "./user/userReducer";
import { tasksReducer } from "./tasks/tasksReducer";
import { workItemsReducer } from "./workItems/workItemsReducer";

const rootReducer = combineReducers({
    authReducer,
    userReducer,
    tasksReducer,
    workItemsReducer,
})

export function myCreateStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return store
}