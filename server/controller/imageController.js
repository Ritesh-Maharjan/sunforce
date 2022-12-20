const asyncHandler = require("express-async-handler");
const Image = require("../models/Image");
const fs = require("fs/promises");

// @desc get image
// @route GET /image
const getAllImages = asyncHandler(async (req, res) => {
  const images = await Image.find().lean();

  if (images?.length === 0) return res.json([]);

  res.json(images);
});

// @desc upload image
// @route POST /image
const uploadImages = asyncHandler(async (req, res) => {

  const name = req.file.filename.split("/")[1];
  const path = `photos/${name}`;
  try {
    const newFile = await Image.create({
      name,
      path,
    });
    res.status(200).json({
      status: "success",
      message: "File created successfully!!",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
});

const deleteImages = async (req, res) => {
  const { path } = req.body;
  console.log(req.body)
  if (!path)
    return res.json({ message: "The path to the image doesn't exist" });

  const deleted = await Image.deleteOne({ path });
  console.log(deleted)
  if (deleted?.deletedCount === 0) return res.json({ message: "Photo doesnt exist" });
  fs.unlink(`public/${path}`, (err) => {
    if (err) {
      // file doens't exist
      next(err);
    } else {
      console.log(`removed`);
    }
  });
  res.json({ message: "Deleted" });
};
// module.exports = { getAllImages, uploadImages };
module.exports = { uploadImages, getAllImages, deleteImages };
