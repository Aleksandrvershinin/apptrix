export async function fetchUser() {
    const req = await fetch('https://example.youtrack.cloud/api/admin/users/me?fields=id,login,name,email', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer perm:cm9vdA==.NDktNQ==.U9qYToWJGGM0yfVz5wjeYYas7FDvGL',
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