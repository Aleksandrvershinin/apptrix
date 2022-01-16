import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDispatch } from "../redux/user/userDispatch";


export function Main() {
    const auth = useSelector(state => state.authReducer.auth)
    const navgate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.user)

    useEffect(() => {
        if (!auth) {
            navgate('/auth')
        }
    })

    useEffect(() => {
        if (auth) {
            dispatch(userDispatch)
        }
    }, [])

    return (
        <>
            <p>Name - {user.name}</p>
            <p>Login - {user.login}</p>
            <p>Email - {user.email}</p>
            <p>ID -  {user.id}</p>
            <p>Type - {user.type}</p>
        </>
    );
}
