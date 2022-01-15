
export async function fetchAuth({ username, password, headers }) {
    const req = await fetch("http://erp.apptrix.ru/api/token/", {
        method: "POST",
        headers,
        body: JSON.stringify({ username, password })
    })
    return req
}

export async function fetchRefresh(refresh_token) {
    const req = await fetch("http://erp.apptrix.ru/api/token/refresh/", {
        method: "POST",
        headers: { 'Content-Type': 'application/json;charset=UTF-8', },
        body: JSON.stringify({ refresh: refresh_token })
    })
    return req
}
