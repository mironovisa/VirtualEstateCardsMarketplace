import React, { useState } from 'react';
import Modal from 'react-modal';

const TermsView = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="full-screen-view terms-view">
      <h2>Terms and Conditions</h2>
      <h3>1. Acceptance of Terms</h3>
      <p>
        By using the Dall-e Images Marketplace website and services, you agree to abide by these terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.
      </p>

      <h3>2. Privacy Policy</h3>
      <p>
        Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our services, you also agree to our Privacy Policy.
      </p>

      <h3>3. Intellectual Property</h3>
      <p>
        All images and content on this website are protected by copyright and other intellectual property rights. You may only use the images in accordance with the licensing terms provided.
      </p>
      <p onClick={openModal} className="terms-link">View Full Terms and Conditions</p>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Terms and Conditions Modal"
        className="modal-content" 
        overlayClassName="modal-overlay" 
      >

        <div>
          <h2>Full Terms and Conditions</h2>
          <h3>1. Acceptance of Terms</h3>
      <p>
        By using the Dall-e Images Marketplace website and services, you agree to abide by these terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.
      </p>

      <h3>2. Privacy Policy</h3>
      <p>
        Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our services, you also agree to our Privacy Policy.
      </p>

      <h3>3. Intellectual Property</h3>
      <p>
        All images and content on this website are protected by copyright and other intellectual property rights. You may only use the images in accordance with the licensing terms provided.
      </p>

      <h3>4. Payment and Refunds</h3>
      <p>
        We accept various payment methods for image purchases. Refunds are available as per our Refund Policy. Please review the policy for details.
      </p>

      <h3>5. Usage Restrictions</h3>
      <p>
        You agree not to use our images for any illegal or harmful purposes. We reserve the right to terminate your account and access if you violate these terms.
      </p>

      <h3>6. Changes to Terms</h3>
      <p>
        We may update these terms and conditions from time to time. It is your responsibility to review them periodically. Continued use of our services after any changes implies acceptance of the updated terms.
      </p>

      <h3>7. Contact Information</h3>
      <p>
        If you have any questions or concerns regarding these terms, please contact us at support@example.com.
      </p>
        </div>

        <button className='modal-close-button'onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default TermsView;