require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { verify } = require("./utils/jwt");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use((req, res, next) => {

  if (
    (req.method === 'POST' && req.url === '/auth/login') ||
    (req.method === 'POST' && req.url === '/users') ||
    (req.method === 'POST' && req.url.startsWith('/orders'))
) {
    return next();
}

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTI4NjE2MjksImV4cCI6MTY5Mjk0ODAyOX0.Kb1MU-SNQUde8RKDbVXmHG4R3fXd-8KfSaXAd0cW5ks";
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

app.listen(3001, () => {
  console.log("connected on port 3001");
});
