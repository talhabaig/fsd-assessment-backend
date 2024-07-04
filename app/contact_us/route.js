const express = require("express");
const { handelUserData } = require("./controller");
router = express.Router();

router.post("/contact-us", handelUserData);
module.exports = router;
