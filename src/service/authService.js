import {
    API
} from "../constant/api"

const authService = {
    login(data) {
        return fetch(`${API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },

    register(data) {
        return fetch(`${API}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    },

    refreshToken() {
        const token = JSON.parse(localStorage.getItem('token'))
        return fetch(`${API}/refresh-token`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                refreshToken: token.refreshToken
            })
        }).then(res => res.json())
    }

}

export default authService