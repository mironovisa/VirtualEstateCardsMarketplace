import React from 'react';
import '../../Styles/AboutPage.css'; 
import FAQView from './FAQView';
import TermsView from './TermsView';

const AboutPage = () => {
    return (
        <div className="about-page">
            <FAQView />
            <TermsView />
        </div>
    );
}

export default AboutPage;