import { changeUsers } from "../actionTypes";

const initState = {
    users: []
}

export function usersReducer(state = initState, action) {
    switch (action.type) {
        case changeUsers:
            const users = action.payload
            state = { ...state, users: [...users] }
            return state;
        default:
            return state;
    }
}