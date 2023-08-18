///// App.js with isLoggedIn and isAdmin conditioning///
/*import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './Views/LandingView/LandingPage';
import MarketPage from './Views/MarketView/MarketPage';
import AdminPage from './Views/AdminDashboardView/AdminPage';
import ProfilePage from './Views/ProfileView/ProfilePage';
import AboutPage from './Views/AboutView/AboutPage';
import HomePage from './Views/HomeView/HomePage';
import SignInModal from './Views/LandingView/SignInModal'; 

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);
    const userIcon = localStorage.getItem('userIcon');

    const logout = () => {
       setIsLoggedIn(false)
    };

    return (
    <Router>
        <div className="app">
            <nav>
                {isLoggedIn && <NavLink to="/home" > Home </NavLink>}
                {isLoggedIn && <NavLink to="/profile"> Profile </NavLink>}
                {isLoggedIn && <NavLink to="/market"> Market </NavLink>}
                {isLoggedIn && <NavLink to="/about"> About </NavLink>}
                {isLoggedIn && isAdmin && (
                    <>
                        <NavLink to="/dashboard" > Dashboard </NavLink>
                    </>
                )}
                {!isLoggedIn ? (
                    <>
                        <NavLink to="/login"> Login </NavLink>
                        <NavLink to="/signup"> Signup </NavLink>
                    </>
                ) : (
                    <>
                        <div className='rightNav'>
                            <button className="logout-btn" onClick={logout}></button>
                            <div className="user-icon">{userIcon}</div>
                        </div>
                    </>
                )}
          </nav>
          <main>
            <section>
                <Routes>
                    {isLoggedIn && <Route path="/home" element={<HomePage />} />}
                    {isLoggedIn && <Route path="/profile" element={<ProfilePage />} />}
                    {isLoggedIn && <Route path="/market" element={<MarketPage />} />}
                    {isLoggedIn && <Route path="/about" element={<AboutPage />} />}
                    {isLoggedIn && isAdmin && <Route path="/dashboard" element={<AdminPage />} />}
                   
                    {!isLoggedIn && <Route path="/login" element={<SignInModal  setModalComponent={setModalComponent} />} />}
                    {!isLoggedIn && <Route path="/signup" element={<SignInModal  setModalComponent={setModalComponent} />} />}
                    {!isLoggedIn && <Route path="/*" element={<LandingPage />} />}
                    <Route path="/*" element={<Navigate to={isLoggedIn ? '/home' : '/*'} />} />
                  </Routes>
                  {modalComponent && (
                    <SignInModal setModalComponent={setModalComponent} />
                  )}
            </section>
          </main>
        </div>
    </Router>
  );
};

export default App;
*/





import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './Views/LandingView/LandingPage';
import MarketPage from './Views/MarketView/MarketPage';
import AdminPage from './Views/AdminDashboardView/AdminPage';
import ProfilePage from './Views/ProfileView/ProfilePage';
import AboutPage from './Views/AboutView/AboutPage';
import HomePage from './Views/HomeView/HomePage';
import SignInModal from './Views/LandingView/SignInModal'; 

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);
    const userIcon = localStorage.getItem('userIcon');

    const logout = () => {
       setIsLoggedIn(false)
    };

    return (
    <Router>
        <div className="app">
            <nav>
                <NavLink to="/"> LandingPage </NavLink>
                <NavLink to="/home"> Home </NavLink>
                <NavLink to="/profile"> Profile </NavLink>
                <NavLink to="/market"> Market </NavLink>
                <NavLink to="/about"> About </NavLink>
                {isLoggedIn && <NavLink to="/dashboard"> Dashboard </NavLink>}
                
                {!isLoggedIn ? (
                    <>
                        <NavLink to="/login"> Login </NavLink>
                        <NavLink to="/signup"> Signup </NavLink>
                    </>
                ) : (
                    <>
                        <div className='rightNav'>
                            <button className="logout-btn" onClick={logout}></button>
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
                    <Route path="/market" element={<MarketPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    {isLoggedIn && <Route path="/dashboard" element={<AdminPage />} />}
                   
                    <Route path="/login" element={<SignInModal  setModalComponent={setModalComponent} />} />
                    <Route path="/signup" element={<SignInModal  setModalComponent={setModalComponent} />} />
                    <Route path="/*" element={<Navigate to={isLoggedIn ? '/home' : '/*'} />} />
                  </Routes>
                  {modalComponent && (
                    <SignInModal setModalComponent={setModalComponent} />
                  )}
            </section>
          </main>
        </div>
    </Router>
  );
};

export default App;