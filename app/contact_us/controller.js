const userDetail = require("./model");
async function handelUserData(req, res) {
  const { firstName, lastName, phoneNo, email, message } = req.body;
  if (!firstName || !lastName || !phoneNo || !email) {
    res.status(400).json({
      message: "First name, last name, phone number, and email are required",
    });
  }
  try {
    const existingUser = await userDetail.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new userDetail({
      firstName,
      lastName,
      phoneNo,
      email,
      message,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { handelUserData };
    