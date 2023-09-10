const express = require("express");
const router = express.Router(); // Create an instance of an Express router
const stripe = require("stripe")(
  "sk_test_51NnhJ1ER2zKdfDHaJIEut5Lk8gxI0EpZKFz5p71n8aU7IRiLjKC2KY11Ax3uWrEEtduWZt4Xj0bjOOKjoLVjnGTf00F7ewuzbA"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "USD",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
