const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");
const user = require("./Routes/UserRoutes");
const { auth } = require("express-openid-connect");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));

db.once("open", function () {
  console.log("Successfully connected to MongoDB!");
});

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: "http://localhost:3000",
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(auth(config));

app.get("/", (req, res) => {
  res.json({
    message: "hej",
  });
});

app.use("/user", user);

const port = process.env.PORT || 6592;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
