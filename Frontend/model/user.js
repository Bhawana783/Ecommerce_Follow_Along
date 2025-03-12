const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePhoto: { type: String, default: "default-profile.jpg" },
  addresses: { type: [String], default: [] },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
