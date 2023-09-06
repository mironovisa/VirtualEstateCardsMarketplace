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
    const location = useLocation();
    
    console.log('isLoggedIn:', isLoggedIn);

    const handleCart = () => {
        setCart(true);
    }
    
    return (
        <div className="app">
            <nav className='links-container'>
                <li><NavLink to="/" className="nav-link underline-effect" activeclassname="active"> Home <img className='nav-icon' src={require('./Icons/Home.png')} alt='Home'></img></NavLink></li>
                <li><NavLink to="/home" className="nav-link underline-effect" activeclassname="active"> Search <img className='nav-icon' src={require('./Icons/Search.png')} alt='Search'></img></NavLink></li>
                {isLoggedIn && (<li><NavLink to="/profile" className="nav-link underline-effect" activeclassname="active"> Profile <img className='nav-icon' src={require('./Icons/Profile.png')} alt='Profile'></img></NavLink></li>)}
                <li><NavLink to="/about" className="nav-link underline-effect" activeclassname="active"> About <img className='nav-icon' src={require('./Icons/AboutIcon.png')} alt='About'></img></NavLink></li>
                {isLoggedIn && (
                    <li><NavLink to="/dashboard" className="nav-link underline-effect" activeclassname="active"> Dashboard <img className='nav-icon' src={require('./Icons/Dashboard.png')} alt='Dashboard'></img></NavLink></li>
                )}
                
                {!isLoggedIn ? (
                    <>
                    <li className='right-nav'>
                        <NavLink to="/login" className="nav-link underline-effect" activeclassname="active"> Login <img className='nav-icon' src={require('./Icons/login.png')} alt='logout'></img></NavLink>
                    </li>
                    </>
                ) : (
                    <>                        
                    <li className='right-nav'>
                        <NavLink className="cart-btn nav-link underline-effect" onClick={handleCart}><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                        <NavLink className="nav-link underline-effect nav-logout" onClick={logoutUser}>Logout<img className='nav-icon' src={require('./Icons/Logout.png')} alt='logout'></img></NavLink>
                    </li>
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