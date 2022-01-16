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