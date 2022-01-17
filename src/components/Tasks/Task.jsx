import React from 'react'
import { Link } from 'react-router-dom'

export function Task({ task }) {

    return (
        <tr>
            <td>{task.id}</td>
            <td>{task.summary}</td>
            <td>{task.project.name}</td>
            <td><button><Link to={`/work-items/${task.id}`}>Timesheet</Link></button></td>
        </tr>
    )
}