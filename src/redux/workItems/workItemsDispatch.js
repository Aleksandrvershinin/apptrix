import { fetchWorkItems } from "../../api/apiYoutrack";
import { changeWorkItems } from "../actionTypes";

export async function workItemsDispatch({ dispatch, id }) {
    const workItems = await fetchWorkItems(id);
    dispatch({ type: changeWorkItems, payload: workItems })
}