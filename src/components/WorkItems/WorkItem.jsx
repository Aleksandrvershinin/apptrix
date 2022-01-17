import React from 'react'

export function WorkItem({ workItem }) {
    const username = workItem?.author?.name
    const duration = calcDuration(workItem?.duration?.minutes)

    function calcDuration(duration) {
        if (typeof duration !== 'number') return { minutes: 0, hours: 0 }
        const minutes = duration % 60
        const hours = Math.floor(duration / 60)
        return { minutes, hours }
    }

    function declOfNum(number, titles) {
        return number === 1 ? `${number} ${titles[0]}` : `${number} ${titles[1]}`
    }

    return (
        <tr>
            <td>{username}</td>
            <td>{`${declOfNum(duration.hours, ['hour', 'hours'])} ${declOfNum(duration.minutes, ['minute', 'minutes'])}`}</td>
        </tr>
    )
}