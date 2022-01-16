import { fetchAuth, fetchRefresh } from "../../api/apiApptrix";
import { actionLocalStorage } from "../../api/localStorage";
import { changeAuth } from "../actionTypes";

const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
}

export async function authDispatch({ dispatch, username, password }) {
    const accessToken = actionLocalStorage('get', 'access_token')
    if (accessToken !== null) {
        headers.Authorization = `Bearer ${JSON.parse(accessToken)}`
    }
    let res = await fetchAuth({ username, password, headers })
    if (res.status === 200) {
        res = await res.json();
        saveToken(res.access, res.refresh)
        dispatch({ type: changeAuth, payload: { auth: true } })
    }
    if (res.status === 401) {
        refreshDispatch(dispatch)
    }
}

async function refreshDispatch(dispatch) {
    const refreshToken = actionLocalStorage('get', 'refresh_token')
    if (refreshToken !== null) {
        let res = await fetchRefresh(JSON.parse(refreshToken))
        if (res.status === 200) {
            res = await res.json();
            saveToken(res.access, res.refresh)
            dispatch({ type: changeAuth, payload: { auth: true } })
        } else {
            removeToken();
            dispatch({ type: changeAuth, payload: { auth: false } })
        }
    }
}

function saveToken(accessToken, refreshToken) {
    actionLocalStorage('set', 'access_token', accessToken)
    actionLocalStorage('set', 'refresh_token', refreshToken)
}
function removeToken() {
    actionLocalStorage('remove', 'access_token')
    actionLocalStorage('remove', 'refresh_token')
}