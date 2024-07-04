const mongoose = require("mongoose");

const aboutUsSchema = new mongoose.Schema({
  visionAndMission: {
    type: String,
    required: true,
  },
});

const AboutUs = mongoose.model("AboutUs", aboutUsSchema);
module.exports = AboutUs;
