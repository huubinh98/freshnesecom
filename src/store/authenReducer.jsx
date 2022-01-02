import React from 'react'

const user = JSON.parse(localStorage.getItem('login'));

const initialState = {
    login: !!user,
    user
}

const authenReducer = (state, action) => {

    switch(action.type) {
        case 'Login': 
        
    }

}

export default authenReducer
