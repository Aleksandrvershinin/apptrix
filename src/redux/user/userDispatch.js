import { fetchUser } from '../../api/apiYoutrack'
import { changeUser } from '../actionTypes'

export async function userDispatch(dispatch) {
    const user = await fetchUser()
    dispatch({ type: changeUser, payload: user })
}