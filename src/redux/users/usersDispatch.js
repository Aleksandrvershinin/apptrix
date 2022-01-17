import { fetchUsers } from '../../api/apiYoutrack'
import { changeUsers } from '../actionTypes'

export async function usersDispatch(dispatch) {
    const user = await fetchUsers()
    dispatch({ type: changeUsers, payload: user })
}