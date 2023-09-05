import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import LandingPage from './Views/LandingView/LandingPage';
import AdminPage from './Views/AdminDashboardView/AdminPage';
import ProfilePage from './Views/ProfileView/ProfilePage';
import AboutPage from './Views/AboutView/AboutPage';
import HomePage from './Views/HomeView/HomePage';
import SigninModal from './Views/SignInModal'; 
import { CartView } from 'Views/CartView/CartView'; 
import { useContext } from 'react';
import { authContext } from 'Auth/authContext';

function App() {
    const { isLoggedIn, logoutUser } = useContext(authContext);
    const [modalComponent, setModalComponent] = useState(null);
    const [cart, setCart] = useState(false);
    const userIcon = localStorage.getItem('userIcon');
    const location = useLocation();
    
    console.log('isLoggedIn:', isLoggedIn);

    const handleCart = () => {
        setCart(true);
    }
    
    return (
        <div className="app">
            <nav className='links-container'>
                <li><NavLink to="/" className="nav-link underline-effect" activeclassname="active"> Home </NavLink></li>
                <li><NavLink to="/home" className="nav-link underline-effect" activeclassname="active"> Search </NavLink></li>
                {isLoggedIn && (<li><NavLink to="/profile" className="nav-link underline-effect" activeclassname="active"> Profile </NavLink></li>)}
                <li><NavLink to="/about" className="nav-link underline-effect" activeclassname="active"> About </NavLink></li>
                {isLoggedIn && (
                    <li><NavLink to="/dashboard" className="nav-link underline-effect" activeclassname="active"> Dashboard </NavLink></li>
                )}
                
                {!isLoggedIn ? (
                    <>
                    <li className='right-nav'>
                        <NavLink to="/login" className="nav-link underline-effect" activeclassname="active"> Login </NavLink>
                    </li>
                    </>
                ) : (
                    <>
                        <div className='right-nav'>
                            <button className="cart-btn nav-link underline-effect" onClick={handleCart}><FontAwesomeIcon icon={faCartShopping} /></button>
                            <button className="logout-btn nav-link underline-effect" onClick={logoutUser}>Logout</button>
                            <div className="user-icon">{userIcon}</div>
                        </div>
                    </>
                )}
            </nav>
            <main>
                <section>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/cart" element={<CartView />} />
                        {isLoggedIn && <Route path="/dashboard" element={<AdminPage />} />}
                       
                        <Route path="/login" element={<SigninModal  setModalComponent={setModalComponent} />} />
                        <Route path="/signup" element={<SigninModal  setModalComponent={setModalComponent} />} />
                        <Route path="/*" element={<Navigate to={isLoggedIn ? '/home' : '/*'} />} />
                    </Routes>
                    {modalComponent && (
                        <SigninModal setModalComponent={setModalComponent} />
                    )}
                    {cart && <CartView state={cart} onChange={setCart} />}
                </section>
            </main>
        </div>
    );
}

export default App;