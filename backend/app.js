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

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>Hey brother</h1>");
});

app.use(async (req, res, next) => {
  console.log("made it here");
  if (
    (req.method === "POST" && req.url === "/auth/login") ||
    (req.method === "POST" && req.url === "/users") ||
    (req.method === "POST" && req.url.startsWith("/orders"))
  ) {
    return next();
  }

  console.log(req.headers, "headers", req.body, "body");
  const token = req.headers.accesstoken;

  console.log(token, "token");

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

app.get("/test", (req, res) => {
  res.send("Route reached");
});

app.use(dailyConnectionCheck, (req, res, next) => {
  next();
});

const port = process.env.PORT || 3001; // DO NOT CHANGE THIS

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
