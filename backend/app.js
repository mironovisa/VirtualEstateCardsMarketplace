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
  if (
    (req.method === 'POST' && req.url === '/auth/login') ||
    (req.method === 'POST' && req.url === '/users') ||
    (req.method === 'POST' && req.url.startsWith('/orders'))
  ) {
    return next();
  }

  const token = req.headers.accesstoken

  console.log(req.body);

  console.log(req.headers, 'token');

  const data = verify(token);

  if (!data) {
    return res.status(401).send("user not allowed");
  }
  const me = await users.getById(data.id);
  req.me = me;

  console.log(data);


  next();
});

app.use(dailyConnectionCheck, (req, res, next) => {
  next();
});




app.use("/users", require("../backend/routes/users.route"));
app.use("/auth", require("./routes/auth.route"));
app.use("/datagen", require("./routes/datagen.route"));

app.listen(3001, () => {
  console.log("connected on port 3001");
});
