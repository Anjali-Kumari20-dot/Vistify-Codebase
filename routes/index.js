var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get('/alluserposts', async function (req, res, next){
  let user = await userModel
  .findOne({_id: "683d2d35d3c2edb694b09c78"})
  .populate('posts');
  res.send(user);
})

router.get("/createUser", async function (req, res, next) {
  let createdUser = await userModel.create({
    username: "Anushka",
    password: "Anushka", // Make sure to hash passwords before storing!
    posts: [], // Array of post references
    email: "Anushka123@gmail.com",
    fullname: "Anushka Kumari",
  });
  res.send(createdUser);
});

router.get("/createPost", async function (req, res, next) {
  let createdPost = await postModel.create({
    postText: "Hello Everyone",
    user: "683d2d35d3c2edb694b09c78",
  });
  let user = await userModel.findOne({_id: "683d2d35d3c2edb694b09c78"});
  user.posts.push(createdPost._id);
  await user.save();
  res.send("done");
})

module.exports = router;
