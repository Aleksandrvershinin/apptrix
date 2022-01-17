import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { usersReducer } from "./users/usersReducer";
import { tasksReducer } from "./tasks/tasksReducer";
import { workItemsReducer } from "./workItems/workItemsReducer";

const rootReducer = combineReducers({
    authReducer,
    usersReducer,
    tasksReducer,
    workItemsReducer,
})

export function myCreateStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return store
}