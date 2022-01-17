import React from "react";
import { useLocation, useNavigate } from "react-router";


export function User() {
    const location = useLocation()
    const user = location.state?.user
    const navigate = useNavigate();
    return (
        <>
            <table border='1' >
                <thead>
                    <tr>
                        <th width='100'>ID</th>
                        <th>NAME</th>
                        <th>LOGIN</th>
                        <th>EMAIL</th>
                        <th>TYPE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.login}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.$type}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    );
}
