import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export function CheckAuth({ children }) {
    const auth = useSelector(state => state.authReducer.auth)
    function render() {
        if (auth) {
            return <>{children} </>
        } else {
            return <Navigate to='/auth' />
        }
    }
    return (
        <>
            {render()}
        </>
    )
}