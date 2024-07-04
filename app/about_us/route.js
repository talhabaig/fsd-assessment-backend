const express = require("express");
const { fetchAboutUsPageData } = require("./controller");
const router = express.Router();

router.get("/about-us", fetchAboutUsPageData);

module.exports = router;
