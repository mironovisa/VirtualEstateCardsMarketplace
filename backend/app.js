require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { verify } = require("./utils/jwt");
const DBmongo = require("./services/users.service");
const users = new DBmongo("NFTMarketPlace", "users");
const dailyConnectionCheck = require("./utils/connection.check");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(async (req, res, next) => {

  console.log('made it here');
  if (
    (req.method === 'POST' && req.url === '/auth/login') ||
    (req.method === 'POST' && req.url === '/users') ||
    (req.method === 'POST' && req.url.startsWith('/orders'))
  ) {
    return next();
  }

  console.log(req.headers, 'headers', req.body, 'body');
  const token = req.headers.accesstoken

  console.log(token, 'token');

  const data = verify(token);

  if (!data) {
    return res.status(401).send("user not allowed");
  }

  console.log(data);


  next();
});


app.use("/users", require("../backend/routes/users.route"));
app.use("/auth", require("./routes/auth.route"));
app.use("/datagen", require("./routes/datagen.route"));

app.use(dailyConnectionCheck, (req, res, next) => {
  next();
});

app.listen(3001, () => {
  console.log("connected on port 3001");
});
