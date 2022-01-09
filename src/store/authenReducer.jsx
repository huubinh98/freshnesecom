const login = JSON.parse(localStorage.getItem('token'));

const initialState = {
    login: !!login,
}

const authenReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN':
            const token = action.payload
            localStorage.setItem('token', JSON.stringify(token))
            return {
                login: !!token,
                user: token
            }
        case 'REGIS':
            return {
                user: token
            }
        case 'LOGOUT':
            localStorage.removeItem('login')
            return {
                login: false,
                user: null
            }
        default:
            return state
    }
}

export default authenReducer
