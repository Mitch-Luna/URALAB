export default async function getRolesUser() {
    const url = `${process.env.API_BASE_URL}/roles`;
    const options = {}
    const roles = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "aplication/json",
            "api-key": process.env.API_KEY,
        }
    })
    return roles.json();

}