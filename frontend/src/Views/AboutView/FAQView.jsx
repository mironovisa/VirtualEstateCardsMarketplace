import React, { useState } from 'react';
import Modal from 'react-modal';


const FAQView = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="full-screen-view faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item ">
        <h3>1. How can I purchase images from the Dall-e Images Marketplace?</h3>
        <p>
          To purchase images from our marketplace, simply follow these steps:
        </p>
        <ol>
          <li>Browse our collection of stunning images.</li>
          <li>Click on the image you'd like to purchase to view its details.</li>
          <li>Click the "Add to Cart" button.</li>
          <li>Review your selected images in the cart and click "Checkout."</li>
          <li>Provide your billing information and payment details using a credit card.</li>
          <li>Complete the purchase process, and your images will be available for download.</li>
        </ol>
      </div>

      <div className="faq-item no-full-view ">
        <h3>2. Are there any licensing restrictions on the images I purchase?</h3>
        <p>
          All images purchased from the Dall-e Images Marketplace come with a standard commercial license. This license allows you to use the images for a wide range of commercial and personal purposes, such as website design, marketing materials, and more. However, please review our Licensing Terms for full details and restrictions.
        </p>
      </div>

      <div className="faq-item no-full-view ">
        <h3>3. How can I download the images I've purchased?</h3>
        <p>
          After successfully completing your purchase, you can download your images from your account dashboard. Simply log in to your account, navigate to the "My Purchases" section, and you'll find a list of your purchased images. Click the "Download" button next to each image to save it to your device.
        </p>
      </div>
      <p onClick={openModal} className="faq-link">View Full FAQs</p>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="FAQs Modal"
        className="modal-content" 
        overlayClassName="modal-overlay" 
      >
  
        <div className='modal-container'>
          <h1>Full FAQs</h1>
          <div className="faq-item faq-width">
        <h3>1. How can I purchase images from the Dall-e Images Marketplace?</h3>
        <p>
          To purchase images from our marketplace, simply follow these steps:
        </p>
        <ol>
          <li>Browse our collection of stunning images.</li>
          <li>Click on the image you'd like to purchase to view its details.</li>
          <li>Click the "Add to Cart" button.</li>
          <li>Review your selected images in the cart and click "Checkout."</li>
          <li>Provide your billing information and payment details using a credit card.</li>
          <li>Complete the purchase process, and your images will be available for download.</li>
        </ol>
      </div>

      <div className="faq-item faq-width">
        <h3>2. Are there any licensing restrictions on the images I purchase?</h3>
        <p>
          All images purchased from the Dall-e Images Marketplace come with a standard commercial license. This license allows you to use the images for a wide range of commercial and personal purposes, such as website design, marketing materials, and more. However, please review our Licensing Terms for full details and restrictions.
        </p>
      </div>

      <div className="faq-item faq-width">
        <h3>3. How can I download the images I've purchased?</h3>
        <p>
          After successfully completing your purchase, you can download your images from your account dashboard. Simply log in to your account, navigate to the "My Purchases" section, and you'll find a list of your purchased images. Click the "Download" button next to each image to save it to your device.
        </p>
      </div>

      <div className="faq-item faq-width">
        <h3>4. What payment methods do you accept for image purchases?</h3>
        <p>
          We accept Visa, MasterCard, American Express, and PayPal for online image purchases. You can choose your preferred payment method during the checkout process.
        </p>
      </div>

      <div className="faq-item faq-width">
        <h3>5. Can I request a refund if I'm not satisfied with my image purchase?</h3>
        <p>
          We want you to be satisfied with your image purchases. If, for any reason, you're not happy with a purchased image, please contact our customer support team within 30 days of purchase. We'll be happy to assist you with a refund or exchange, as per our Refund Policy.
        </p>
      </div>

      <div className="faq-item faq-width">
        <h3>6. How do I create an account on the Dall-e Images Marketplace?</h3>
        <p>
          Creating an account is easy:
        </p>
        <ol>
          <li>Click the "Sign Up" button at the top right corner of the page.</li>
          <li>Fill in the required information, including your email address and password.</li>
          <li>Follow the on-screen instructions to complete the registration process.</li>
          <li>Once registered, you can log in to your account to access your purchases and account settings.</li>
        </ol>
      </div>
        

        <button onClick={closeModal} className="modal-close-button">
          Close
        </button>
        </div>
      </Modal>
    </div>
  );
};

export default FAQView;