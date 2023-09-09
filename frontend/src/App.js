import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LandingPage from './Views/LandingView/LandingPage';
import AdminPage from './Views/AdminDashboardView/AdminPage';
import ProfilePage from './Views/ProfileView/ProfilePage';
import AboutPage from './Views/AboutView/AboutPage';
import HomePage from './Views/HomeView/HomePage';
import SigninModal from './Views/SignInModal'; 
import { CartView } from 'Views/CartView/CartView'; 
import { useContext } from 'react';
import { authContext } from 'Auth/authContext';
import PopupMessage from './Components/PopupMessage';
import { PopupMessageProvider } from './Context/PopupMessageContext';



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
        <PopupMessageProvider>
        <div className="app">
            <nav className='links-container'>
                <div className='left-side'>
                    <li><NavLink to="/" className="nav-link underline-effect" activeclassname="active"> Home <img className='nav-icon' src={require('./Icons/Home.png')} alt='Home'></img></NavLink></li>
                    <li><NavLink to="/home" className="nav-link underline-effect" activeclassname="active"> Search <img className='nav-icon' src={require('./Icons/Search.png')} alt='Search'></img></NavLink></li>
                    {isLoggedIn && (<li><NavLink to="/profile" className="nav-link underline-effect" activeclassname="active"> Profile <img className='nav-icon' src={require('./Icons/Profile.png')} alt='Profile'></img></NavLink></li>)}
                    <li><NavLink to="/about" className="nav-link underline-effect" activeclassname="active"> About <img className='nav-icon' src={require('./Icons/AboutIcon.png')} alt='About'></img></NavLink></li>
                    {isLoggedIn && (
                        <li><NavLink to="/dashboard" className="nav-link underline-effect" activeclassname="active"> Dashboard <img className='nav-icon' src={require('./Icons/Dashboard.png')} alt='Dashboard'></img></NavLink></li>
                    )}
                </div>
                {!isLoggedIn ? (
                <>
                <div className='right-side'>
                    <li><NavLink to="/login" className="nav-link underline-effect nav-right" activeclassname="active"> Login <img className='nav-icon' src={require('./Icons/login.png')} alt='logout'></img></NavLink></li>
                </div>
                </>
                ) : (
                <>  
                <div className='right-side'>                     
                    <li><NavLink className="nav-link underline-effect" onClick={handleCart}>Cart<img className='nav-icon' src={require('./Icons/shoppingCart.png')} alt='cart'></img></NavLink></li>
                    <li><NavLink className="nav-link underline-effect nav-right" onClick={logoutUser}>Logout<img className='nav-icon' src={require('./Icons/Logout.png')} alt='logout'></img></NavLink></li>
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
                    <PopupMessage />
                </section>
            </main>
        </div>
        </PopupMessageProvider>
    );
}

export default App;