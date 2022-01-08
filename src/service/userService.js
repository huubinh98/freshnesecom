import {API} from "../constant/api"

const userService = {
    getInfo() {
        const token = JSON.parse(localStorage.getItem('token'))
        return fetch(`${API}/user/get-info`, {
            headers: {
                'Authorization': `Bearer ${token.accessToken}`
            }
        }).then(res => res.json())
    }
}

export default userService