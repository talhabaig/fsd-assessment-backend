const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const core = require("cors");
const aboutPageRouter = require("./app/aboutus/route");
const bodyParser = require("body-parser");
const { connectToDB } = require("./utils/database.js");

let app = express();
app.use(
  core({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
let port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/", aboutPageRouter);

connectToDB()
  .then(() => {
    app.listen(port, () => console.log(`app listen on ${port}`));
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });
