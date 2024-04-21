const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db-connect");

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = 5000 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
  });
});
