import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LandingPage from './Views/LandingView/LandingPage';
import AdminPage from './Views/AdminDashboardView/AdminPage';
import ProfilePage from './Views/ProfileView/ProfilePage';
import AboutPage from './Views/AboutView/AboutPage';
import HomePage from './Views/HomeView/HomePage';
import SigninModal from './Views/SigninModal'; 
import { useContext } from 'react';
import { authContext } from 'Auth/authContext';

function App() {
    const { isLoggedIn, logout } = useContext(authContext);
    const [modalComponent, setModalComponent] = useState(null);
    const userIcon = localStorage.getItem('userIcon');
    const location = useLocation();
    
    console.log('isLoggedIn:', isLoggedIn);

    return (
        <div className="app">
            <nav className='links-container'>
                <li><NavLink to="/" className="nav-link underline-effect" activeClassName="active"> Home </NavLink></li>
                <li><NavLink to="/home" className="nav-link underline-effect" activeClassName="active"> Search </NavLink></li>
                <li><NavLink to="/profile" className="nav-link underline-effect" activeClassName="active"> Profile </NavLink></li>
                <li><NavLink to="/about" className="nav-link underline-effect" activeClassName="active"> About </NavLink></li>
                {isLoggedIn && (
                    <li><NavLink to="/dashboard" className="nav-link underline-effect" activeClassName="active"> Dashboard </NavLink></li>
                )}
                
                {!isLoggedIn ? (
                    <>
                    <li className='right-nav'>
                        <NavLink to="/login" className="nav-link underline-effect" activeClassName="active"> Login </NavLink>
                    </li>
                    </>
                ) : (
                    <>
                        <div className='right-nav'>
                            <button className="logout-btn nav-link underline-effect" onClick={logout}>Logout</button>
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
                        {isLoggedIn && <Route path="/dashboard" element={<AdminPage />} />}
                       
                        <Route path="/login" element={<SigninModal  setModalComponent={setModalComponent} />} />
                        <Route path="/signup" element={<SigninModal  setModalComponent={setModalComponent} />} />
                        <Route path="/*" element={<Navigate to={isLoggedIn ? '/home' : '/*'} />} />
                    </Routes>
                    {modalComponent && (
                        <SigninModal setModalComponent={setModalComponent} />
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;