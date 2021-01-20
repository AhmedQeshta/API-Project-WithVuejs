export function login(credentials) {

    return new Promise((res, rej) => {
        axios.post('api/login', credentials)
            .then(response => {
                res(response);
            })
            .catch(err => {
                rej('Wrong E-mail or Password');
            })
    });
}

export function getLoggedInUser() {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
        return null;
    }
    return JSON.parse(userStr);
}
