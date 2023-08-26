// Using the NPM library Redux Toolkit: `npm i @reduxjs/toolkit react-redux`
import { configureStore } from '@reduxjs/toolkit'; 
import authReducer from './reducers/authSlice' 

const store = configureStore({
  reducer: {
    auth: authReducer,
    
  },
});

export default store;
