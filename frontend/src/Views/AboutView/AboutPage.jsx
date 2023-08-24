/*import React from 'react';
import '../../Styles/AboutPage.css'; 
import FAQView from './FAQView';
import TermsView from './TermsView';
import ContactUs from './ContactUs';

const AboutPage = () => {
    return (
        <div className="about-page">
            <FAQView />
            <TermsView />
            <ContactUs />
        </div>
    );
}

export default AboutPage;*/


import React from 'react';
import '../../Styles/AboutPage.css';
import FAQView from './FAQView';
import TermsView from './TermsView';
import ContactUs from './ContactUs';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="full-screen-view faq">
        <FAQView />
      </div>
      <div className="full-screen-view terms">
        <TermsView />
      </div>
      <div className="contact-us-container">
        <ContactUs />
      </div>
    </div>
  );
}

export default AboutPage;