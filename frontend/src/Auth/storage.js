const USER_ID = 'user-id';
const ACCESS_TOKEN = 'access-token';

export const getStorageUser = () => {
    return localStorage.getItem(USER_ID);
}

export const getStorageIsLogin = () => {
    return !!getStorageUser();
}

export const clearStorageUser = () => {
    localStorage.removeItem(USER_ID);
}

export const setStorageUser = (value) => {
    localStorage.setItem(USER_ID, value);
}

export const getStorageToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
}


export const clearStorageToken = () => {
    localStorage.removeItem(ACCESS_TOKEN);
}

export const setStorageToken = (value) => {
    localStorage.setItem(ACCESS_TOKEN, value);
}