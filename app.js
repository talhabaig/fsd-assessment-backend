const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const aboutPageRouter = require("./app/about_us/route");
const contactPageRouter = require("./app/contact_us/route");
const bodyParser = require("body-parser");
const { connectToDB } = require("./utils/database.js");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", aboutPageRouter);
app.use("/", contactPageRouter);

connectToDB()
  .then(() => {
    app.listen(port, () => console.log(`app listen on ${port}`));
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });
