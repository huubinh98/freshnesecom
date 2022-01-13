import { callApiWithToken } from "../components/utils/callApiWithToken"
import {API} from "../constant/api"

const userService = {
    getInfo() {
        return callApiWithToken(`${API}/user/get-info`)
        // const token = JSON.parse(localStorage.getItem('token'))
        // return fetch(`${API}/user/get-info`, {
        //     headers: {
        //         'Authorization': `Bearer ${token.accessToken}`
        //     }
        // }).then(res => res.json())
    },

    // updateInfo() {
    //     return callApiWithToken(`${API}/user/update`)
    // }
}

export default userService