import React from 'react'

const user = JSON.parse(localStorage.getItem('login'));

const initialState = {
    login: !!user,
    user
}

const authenReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('login', JSON.stringify(action.payload))
            return {
                login: true,
                user: action.payload
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
