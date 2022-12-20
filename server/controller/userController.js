const User = require("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

// @desc Get all users
// @route GET /users
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();
  if (!users?.length) {
    return res.status(400).json({ message: "NO users found" });
  }
  res.json(users);
});

// @desc Create users
// @route POST /users
const createUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Confirm data
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // check for duplicates
  const duplicate = await User.findOne({ username }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate username" });
  }

  // hash password
  const hashedPwd = await bcrypt.hash(password, 10);

  const userObject = { username, password: hashedPwd };

  // create and store user
  const user = await User.create(userObject);

  if (user) {
    res.status(201).json({ message: `New user ${username} created` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
});

module.exports = { getAllUsers, createUser };
