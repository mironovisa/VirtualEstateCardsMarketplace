require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");


app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use('/users', require("../backend/routes/users.route"));

app.listen(3001, () => {
    console.log('connected on port 3001');
});