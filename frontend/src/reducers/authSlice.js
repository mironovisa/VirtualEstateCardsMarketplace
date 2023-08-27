import { createSlice } from '@reduxjs/toolkit';
import { setUserCookie, setAdminCookie, clearUserCookie, clearAdminCookie } from '../helpers/cookieManager';

const initialState = {
    isLogin: false,
    isAdmin: false,
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logUserIn: (state, action) => {
            setUserCookie(action.payload);
            state.isLogin = true;
        },
        logUserOut: (state, action) => {
            clearUserCookie(action.payload);
            state.isLogin = false;
        },
        logAdminIn: (state, action) => {
            setAdminCookie(action.payload);
            state.isAdmin = true;
        },
        logAdminOut: (state, action) => {
            clearAdminCookie(action.payload);
            state.isAdmin = false;
        },
    },
});

export const { logUserIn, logUserOut, logAdminIn, logAdminOut } = authSlice.actions;

export default authSlice.reducer;
