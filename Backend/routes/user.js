const express = require("express");
const User = require("../model/user");

const router = express.Router();

// GET user details by email
router.get("/user/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      profilePhoto: user.profilePhoto,
      name: user.name,
      email: user.email,
      addresses: user.addresses,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching user data", error });
  }
});
router.post("/add-address", async (req, res) => {
  const { email, address } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    user.addresses.push(address);
    await user.save();

    res.status(200).json({ message: "Address added successfully", user });
  } catch (error) {
    console.error("Error adding address:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
