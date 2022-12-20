const express = require("express");
const router = express.Router();
const imagesController = require("../controller/imageController");
const authenticated = require("../middleware/authenticated")

const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const originalName = file.originalname.split('.')[0]
    cb(null, `photos/${originalName}${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
});

router.post("/", upload.single("photos"), authenticated, imagesController.uploadImages);

router.get("/", imagesController.getAllImages )

router.delete("/", authenticated, imagesController.deleteImages )

module.exports = router;
