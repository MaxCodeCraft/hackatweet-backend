const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  name: String,
  username: String,
  date: Date,
  content: String,
  likes: Number,
  hashtags: String,
});

const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;
