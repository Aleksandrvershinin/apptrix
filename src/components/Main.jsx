import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { usersDispatch } from "../redux/users/usersDispatch";


export function Main() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)
    useEffect(() => {
        dispatch(usersDispatch)
    }, [])
    return (
        <>
            <Link style={{ fontSize: '20px', marginBottom: '30px', display: 'inline-block' }} to='/tasks'>Tasks</Link>
            <table border='1' >
                <thead>
                    <tr>
                        <th width='100'>ID</th>
                        <th>NAME</th>
                        <th>LOGIN</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.login}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><Link to={'/user'} state={{ user }}>more</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}
