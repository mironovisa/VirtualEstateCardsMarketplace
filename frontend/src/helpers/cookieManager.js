const USER_ID = 'user_id';
const ADMIN_ID = 'admin_id';

// Set a new cookie
const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Get the value of a cookie
const getCookie = (name) => {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }

    return null;
}
const deleteCookie = (name) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}


export const getUserFromCookie = () => {
    return getCookie(USER_ID);
}
export const setUserCookie = (id) => {
    setCookie(USER_ID, id, 1);
}
export const clearUserCookie = () => {
    deleteCookie(USER_ID);
}


export const getAdminFromCookie = () => {
    return getCookie(ADMIN_ID);
}
export const setAdminCookie = (id) => {
    setCookie(ADMIN_ID, id, 1);
}
export const clearAdminCookie = () => {
    deleteCookie(ADMIN_ID);
}