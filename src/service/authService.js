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
        }).then(res => res.json()).then(res => console.log(res))
    }

}

function A() {  }

A()

export default authService