import React, { useContext } from 'react';
import '../../Styles/LandingPage.css';
import '../../StylesKit/DoubleScreenScroll.scss';
import '../../StylesKit/FullScreenView.css';
import Intro from './Intro';
import SignupPage from './SignupPage';
import WeArePage from './WeArePage';
import { authContext } from 'Auth/authContext';
import { motion, useAnimation } from 'framer-motion';
import Intro2 from './Intro2';
import TopImages from './TopImages';
import WhyPage from './WhyPage';
import ParticleBackground from 'Backgrounds/ParticleBackground';

const LandingPage = () => {
  const { isLoggedIn} = useContext(authContext);
  const controls = useAnimation(); 

  const imageSrc1 = require('../../Assets/MockImages/BWAbstract.png');
  const imageSrc2 = require('../../Assets/MockImages/white-yellow-light.png');
  const imageSrc3 = require('../../Assets/MockImages/red-yellow-light.png');

  return (
    <div>
      <main className="main">
        <section className="section">
          <figure className="image-container first-background">
            <img src={imageSrc1} alt="Image Alt Text" />
          </figure>
          <article className="content c1">
            <div className='frame'>
              <Intro />
            </div>
          </article>
          <article className="content c2">
            <div className='frame'>
              <Intro2 />
            </div>
          </article>
        </section>
        <section className="section">
          <figure className="image-container first-background">
            <img src={imageSrc2} alt="Image Alt Text" />
          </figure>
          <article className="content">
            <div className='frame'>
              {!isLoggedIn && <SignupPage />}
              {isLoggedIn && <TopImages />}
            </div>
          </article>
        </section>
        <section className="section">
          <figure className="image-container">
            <img src={imageSrc3} alt="Image Alt Text" />
          </figure>
          <article className="content c1">
            <div className='frame'>
              <WeArePage />
            </div>
          </article>
          <article className="content c2">
            <div className='frame'>
              <WhyPage />
            </div>
          </article>
        </section>
      </main>

      <div className='footer-container'>
      <motion.div className="bg-container-2" animate={controls} transition={{ duration: 0.4, ease: 'easeOut' }}>
          <ParticleBackground />
          <footer className="footer">Fin.</footer>
        </motion.div>
      </div>
    </div>
  );
}

export default LandingPage;