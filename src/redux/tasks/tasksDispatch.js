import { fetchSearchTasks, fetchTasks } from "../../api/apiYoutrack";
import { changeAutoComplitTasks, changeTasks } from "../actionTypes";

export async function tasksDispatch(dispatch) {
    const tasks = await fetchTasks();
    dispatch({ type: changeTasks, payload: tasks })
}

export async function searchTasksDispatch({ dispatch, searchValue }) {
    const searchTasks = await fetchSearchTasks(searchValue);
    dispatch({ type: changeTasks, payload: searchTasks })
}

export async function autoComplitTasksDispatch({ dispatch, searchValue }) {
    const searchTasks = await fetchSearchTasks(searchValue);
    dispatch({ type: changeAutoComplitTasks, payload: searchTasks })
}