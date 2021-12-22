import React from 'react'
import './style.scss'
const Login = () => {
    return (
        <div className="login">
            <form>
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="pswd" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
