const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Vistify', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    }, 
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    }], 
    dp: {
      type: String,
    }, 
    email: { 
      type: String, 
      required: true,
    },
    fullname: { 
      type: String, 
      required: true ,
    },
  },
  { 
    timestamps: true 
  }
); // Adds createdAt and updatedAt timestamps

userSchema.plugin(plm);
module.exports = mongoose.model("User", userSchema);
