import React from 'react';
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

export default AboutPage;