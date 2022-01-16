import { changeUser } from "../actionTypes";

const initState = {
    user: {}
}

export function userReducer(state = initState, action) {
    switch (action.type) {
        case changeUser:
            const user = action.payload
            state = { ...state, user: { ...user } }
            return state;
        default:
            return state;
    }
}