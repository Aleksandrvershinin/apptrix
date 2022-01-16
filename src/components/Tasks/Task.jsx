import React from 'react'

export function Task({ task }) {

    return (
        <tr>
            <td>{task.id}</td>
            <td>{task.summary}</td>
            <td>{task.project.name}</td>
        </tr>
    )
}