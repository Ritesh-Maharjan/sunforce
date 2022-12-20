const mongoose = require("mongoose");

const UserSChema = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("User", UserSChema);
