const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1.27017/Vistify");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Make sure to hash passwords before storing!
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }], // Array of post references
    dp: { type: String }, // URL or path to profile picture
    email: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt timestamps

const User = mongoose.model("User", userSchema);
module.exports = User;
