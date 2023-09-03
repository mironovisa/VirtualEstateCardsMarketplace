import React from 'react';
import '../../Styles/LandingPage.css';
import '../../StylesKit/DoubleScreenScroll.scss';
import '../../StylesKit/FullScreenView.css';
import Intro from './Intro';
import SignupPage from './SignupPage';
import WeArePage from './WeArePage';


const LandingPage = () => {
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
          <article className="content">
            <Intro />
          </article>
        </section>
        <section className="section">
          <figure className="image-container first-background">
            <img src={imageSrc2} alt="Image Alt Text" />
          </figure>
          <article className="content">
            <SignupPage />
          </article>
        </section>
        <section className="section">
          <figure className="image-container">
            <img src={imageSrc3} alt="Image Alt Text" />
          </figure>
          <article className="content">
            <WeArePage />
          </article>
        </section>
      </main>
      <footer className="footer">Fin.</footer>
    </div>
  );
}

export default LandingPage;