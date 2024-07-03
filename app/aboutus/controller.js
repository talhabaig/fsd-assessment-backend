const AboutUs = require("./model");
const aboutDummyData = require("../../MOCK_DATA.json");

async function fetchAboutUsPageData(req, res) {
  try {
    return res.status(200).json(aboutDummyData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { fetchAboutUsPageData };
