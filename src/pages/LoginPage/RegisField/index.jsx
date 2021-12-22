import React, { useState } from 'react'

const Register = () => {

    const [form, setForm] = useState({
        usename: '',
        email: '',
        password: '',
    });

    const handleChange = (name) => (e) => {
        setForm({ ...form, [name]: e.target.value })
    }

    const [err, setErr] = useState();

    const handleSubmit = () => {

        let errObj = {};

        if (!form.usename) {
            errObj.usename = 'Please enter your username'
        }
        if (!form.email) {
            errObj.email = 'Please enter your email'
        }
        if (!form.password) {
            errObj.password = 'Please enter password'
        }
        setErr(errObj);
        console.log(form)
    }

    return (
        <div className="register">
            {/* <form> */}
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input onChange={handleChange('usename')} value={form.usename} type="text" placeholder="User name" />
            {
                err && <p>{err.usename}</p>
            }
            <input onChange={handleChange('email')} value={form.email} type="text" placeholder="Email" />
            {
                err && <p>{err.email}</p>
            }
            <input onChange={handleChange('password')} value={form.password} type="password" placeholder="Password" />
            {
                err && <p>{err.password}</p>
            }
            <button onClick={handleSubmit}>Sign up</button>
            {/* </form> */}
        </div>
    )
}

export default Register
