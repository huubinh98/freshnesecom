const authService = {
    login() {
        return fetch('http://cfd-reactjs.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'abc@gmail.com',
                password: '123456789'
            })
        }).then(res => res.json()).then(res => console.log(res))

    },
    logout() {
        
    }
}

export default authService