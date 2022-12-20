const User = require("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

// @desc Login
// @route post /login
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }
  // search for the user in the DB
  let foundUser = await User.findOne({ username }).lean();
  console.log(foundUser);

  if (!foundUser) {
    return res.status(400).json({ message: "No user found" });
  }

  // compare password
  const match = await bcrypt.compare(password, foundUser.password);

  if (match) {
    req.session.authenticated = true;
    req.session.user = {
      username,
    };
    req.session.save()
    res.json({ _id: foundUser._id, username: foundUser.username, session:req.session });
  } else {
    res.status(401).json({ message: "Incorrect username or password" });
  }
});

const logout = asyncHandler(async (req, res) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.status(200).send("logged out");
  });
});

module.exports = { login, logout };
