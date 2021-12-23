import React, { useState } from 'react'

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

const Register = () => {

    const [formRegis, setFormRegis] = useState({
        usename: '',
        email: '',
        password: '',
    });

    const handleChange = (name) => (e) => {
        setFormRegis({ ...formRegis, [name]: e.target.value })
    }

    const [err, setErr] = useState();

    const handleSubmit = () => {

        let errObj = {};

        if (!formRegis.usename) {
            errObj.usename = '*Please enter your username'
        } else if (formRegis.usename.length < 2) {
            errObj.usename = '*Username must contain more than 2 characters'
        }
        if (!formRegis.email) {
            errObj.email = '*Please enter your email'
        } else if (!emailRegex.test(formRegis.email)) {
            errObj.email = '*Please enter email'
        }
        if (!formRegis.password) {
            errObj.password = '*Please enter password'
        } else if (!passwordRegex.test(formRegis.password)) {
            errObj.password = '*Password must contain 8 - 32 characters'
        }
        setErr(errObj);
        console.log(formRegis)
    }

    return (
        <div className="register">
            {/* <form> */}
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input onChange={handleChange('usename')} value={formRegis.usename} type="text" placeholder="User name" />
            {
                err && <p>{err.usename}</p>
            }
            <input onChange={handleChange('email')} value={formRegis.email} type="text" placeholder="Email" />
            {
                err && <p>{err.email}</p>
            }
            <input onChange={handleChange('password')} value={formRegis.password} type="password" placeholder="Password" />
            {
                err && <p>{err.password}</p>
            }
            <button onClick={handleSubmit}>Sign up</button>
            {/* </form> */}
        </div>
    )
}

export default Register
