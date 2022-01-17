import { changeWorkItems } from "../actionTypes";

const initState = {
    workItems: []
}

export function workItemsReducer(state = initState, action) {
    switch (action.type) {
        case changeWorkItems:
            const workItems = action.payload
            state = { ...state, workItems: [...workItems] }
            return state;
        default:
            return state;
    }
}