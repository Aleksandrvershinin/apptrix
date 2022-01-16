import { changeAuth } from "../actionTypes";

const initState = {
    auth: false
}

export function authReducer(state = initState, action) {
    switch (action.type) {
        case changeAuth:
            state = { ...state, auth: action.payload.auth }
            return state;

        default:
            return state;
    }
}