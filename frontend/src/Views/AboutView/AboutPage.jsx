import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../../Styles/AboutPage.css'; 
import FAQView from './FAQView';
import TermsView from './TermsView';
import ContactUs from './ContactUs';

const AboutPage = () => {
  const pageRef = useRef();
  const controls = useAnimation();

  useEffect(() => {
    // Trigger the animation when the component mounts
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, []);

  return (
    <motion.div className="about-page" ref={pageRef} initial={{ opacity: 0, y: 100 }} animate={controls}>
      <motion.div className="page-container" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <FAQView />
      </motion.div>
      <motion.div className="page-container" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <TermsView />
      </motion.div>
      <motion.div className="page-container" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
        <ContactUs />
      </motion.div>
    </motion.div>
  );
}

export default AboutPage;