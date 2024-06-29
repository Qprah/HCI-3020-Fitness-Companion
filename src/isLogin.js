
let isLogin = false;

const getLogin = () => {
    return isLogin;
};

const setLogin = (thisIsLogin) => {
    isLogin = thisIsLogin;
};

export { setLogin, getLogin }