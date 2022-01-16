import { changeTasks, changeAutoComplitTasks } from "../actionTypes";


const initState = {
    tasks: [],
    autoComplitTasks: [],
}

export function tasksReducer(state = initState, action) {
    switch (action.type) {
        case changeTasks:
            const tasks = action.payload
            state = { ...state, tasks: [...tasks] }
            return state;
        case changeAutoComplitTasks:
            const autoComplitTasks = action.payload
            state = { ...state, autoComplitTasks: [...autoComplitTasks] }
            return state;
        default:
            return state;
    }
}