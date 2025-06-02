const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/databaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: false,
    },
    password: {
      type: String,
      required: true,
    }, // Make sure to hash passwords before storing!
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    }], // Array of post references
    dp: {
      type: String,
    }, // URL or path to profile picture
    email: { 
      type: String, 
      required: true,
       unique: false,
    },
    fullname: { 
      type: String, 
      required: true ,
      unique: false,
    },
  },
  { 
    timestamps: true 
  }
); // Adds createdAt and updatedAt timestamps

module.exports = mongoose.model("User", userSchema);
