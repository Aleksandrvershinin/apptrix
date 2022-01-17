import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userDispatch } from "../redux/user/userDispatch";


export function Main({ t }) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)
    useEffect(() => {
        dispatch(userDispatch)
    }, [])
    return (
        <>
            <button>
                <Link to='/tasks'>Tasks</Link>
            </button>
            <p>Name - {user.name}</p>
            <p>Login - {user.login}</p>
            <p>Email - {user.email}</p>
            <p>ID -  {user.id}</p>
            <p>Type - {user.type}</p>
        </>
    );
}
