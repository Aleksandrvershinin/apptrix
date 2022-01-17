export async function fetchUsers() {
    const req = await fetch('https://example.youtrack.cloud/api/users?fields=id,login,name,email', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer perm:am9obi5kb2U=.UG9zdG1hbiBKb2huIERvZQ==.jJe0eYhhkV271j1lCpfknNYOEakNk7',
            'Cache-Control': 'no-cache'
        }
    })
    if (req.status === 200) {
        const res = await req.json()
        return res
    }
}

export async function fetchTasks() {
    const req = await fetch('https://example.youtrack.cloud/api/issues?fields=id,summary,project(name)', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer perm:amFuZS5kb2U=.UkVTVCBBUEk=.wcKuAok8cHmAtzjA6xlc4BrB4hleaX',
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        }
    })
    if (req.status === 200) {
        const res = await req.json()
        return res
    }
}

export async function fetchSearchTasks(value) {
    const req = await fetch(`https://example.youtrack.cloud/api/issues?fields=id,summary,project(name)&query=${value}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer perm:amFuZS5kb2U=.UkVTVCBBUEk=.wcKuAok8cHmAtzjA6xlc4BrB4hleaX',
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        }
    })
    if (req.status === 200) {
        const res = await req.json()
        return res
    }
}

export async function fetchWorkItems(id) {
    const req = await fetch(`https://example.youtrack.cloud/api/workItems?fields=created,duration(minutes),author(name),id=${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer perm:amFuZS5kb2U=.UkVTVCBBUEk=.wcKuAok8cHmAtzjA6xlc4BrB4hleaX',
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        }
    })
    if (req.status === 200) {
        const res = await req.json()
        return res
    }
}