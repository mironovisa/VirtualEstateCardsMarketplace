import React, { useRef } from 'react';
import '../../Styles/AboutPage.css'; 
import FAQView from './FAQView';
import TermsView from './TermsView';
import ContactUs from './ContactUs';

const AboutPage = () => {
  const pageRef = useRef();

  return (
    <div className="about-page" ref={pageRef}>
      <div className="page-container">
        <FAQView />
      </div>
      <div className="page-container">
        <TermsView />
      </div>
      <div className="page-container">
        <ContactUs />
      </div>
    </div>
  );
}

export default AboutPage;