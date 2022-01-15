import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authDispatch } from "../redux/authDispatch";

export function Auth() {
    const [username, setUsername] = useState('erp_user')
    const [password, setPassword] = useState('12qwaszx12qwaszx')
    const auth = useSelector(state => state.authReducer.auth)
    const navgate = useNavigate()

    useEffect(() => {
        if (auth) {
            navgate('/')
        }
    })

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch((dispatch) => authDispatch({ dispatch, username, password }))
    }
    const changeUsername = (e) => {
        setUsername(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input onChange={changeUsername} value={username} placeholder='username' name='name' type="text" />
            <input onChange={changePassword} value={password} placeholder='password' name='password' type="text" />
            <button onClick={handleClick}>Авторизация</button>
        </form>
    );
}
