import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export function Main() {
    const auth = useSelector(state => state.authReducer.auth)
    const navgate = useNavigate()

    useEffect(() => {
        if (!auth) {
            navgate('/auth')
        }
    })

    return (
        <>
        </>
    );
}
