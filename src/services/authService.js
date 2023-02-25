const AuthService = {
    setUser: (res) => {
        if (res && res.data) {
            localStorage.setItem('user', JSON.stringify(res.data));
        }
    },
    removeUser: () => {
        localStorage.removeItem('user');
    },
    getCurrentUser: () => {
        return localStorage.getItem('user');
    },
};

export default AuthService;
