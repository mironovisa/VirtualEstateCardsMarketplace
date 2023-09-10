import React, { useState, useEffect } from "react";
import "./CartView.css";
import ParticleBackground from "../../Backgrounds/ParticleBackground";
import { imagesApi } from "helpers/Api/imagesApi";
import { usersApi } from "helpers/Api";
import { motion, useAnimation } from "framer-motion";
import PaymentModal from "../../Components/PaymentModal";
import StripeCheckout from "react-stripe-checkout";
import ag from "../../Assets/ag.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CartView = ({ state, onChange }) => {
  const [images, setImages] = useState([]);
  const [totalSum, setTotalSum] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(state);
  const [showModal, setShowModal] = useState(false);
  const [stripeToken, setStripeToken] = useState(null);
  const controls = useAnimation();
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await axios.post("http://localhost:3001/pay/payment", {
          tokenId: stripeToken.id,
          amount: totalSum * 100,
        });
        console.log("response: " + JSON.stringify(response.data));
        navigate("/succcess");
        setCartItems([]);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  const getAllImages = () => {
    imagesApi
      .getAllImages()
      .then((res) => {
        const filteredItems = res.filter((item) => item.inCart === true);
        setCartItems(filteredItems);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const toggleCart = () => {
    setIsOpen(!isOpen);
    onChange(!isOpen);
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveItem = (itemId) => {
    const payload = {
      id: itemId,
    };

    usersApi
      .removeUserCart(payload)
      .then((res) => {
        getAllImages();
      })
      .catch((err) => {
        console.log(err);
      });

    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter(
        (item) => item.id !== itemId
      );
      return updatedCartItems;
    });
  };

  const handleCheckout = () => {
    console.log("Checking out");
    const total = calculateTotal().toFixed(2);
    setTotalSum(total);
    // setShowModal(true);
    console.log("showModal:", showModal); // Add this line
    console.log("items", cartItems);
    console.log("total", total);
  };

  useEffect(() => {
    controls.start({ x: isOpen ? 0 : "100%" });
  }, [isOpen, controls]);

  return (
    <>
      <motion.div
        className={`cart ${isOpen ? "open" : ""}`}
        animate={controls}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="bg-container"
          animate={controls}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ParticleBackground />
        </motion.div>
        <div className="cart-header-cont">
          <button className="close-button-cart" onClick={toggleCart}>
            &times;
          </button>
          <div className="cart-header">
            <span>Bring Art</span>
            <span> To </span>
            <span>Infinity</span>
          </div>
        </div>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item._id}>
              <div className="cart-item">
                <h2 className="cart-item-title">{item.title}</h2>
                <span className="cart-item-price">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item._id)}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <strong>Total:</strong> ${calculateTotal().toFixed(2)}
          <div>
            <StripeCheckout
              name="Art Galleria"
              image={ag}
              billingAddress
              shippingAddress
              description={`Your best art galleria`}
              amount={totalSum * 100}
              token={onToken}
              stripeKey="pk_test_51NnhJ1ER2zKdfDHaHSy8mDcss6ADf7jKRi1psyjhriI63NCVblISqE8GKjcoGrxWfrioHjlieY9ih0MtafNtqE8400xPtglKdO"
            >
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed To Checkout
              </button>
            </StripeCheckout>
          </div>
        </div>
      </motion.div>
      {showModal && (
        <PaymentModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};
