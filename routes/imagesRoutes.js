const express = require("express");

// import the controllers : function devoloped to handle the requests
const { getAllImages, addImage } = require("../controllers/imagesController");

// create a router , middleware provided by express to handle the requests and responses in the routes files
const router = express.Router();

// all routes in this file will start with /api/images

// @route   GET api/images
// @desc    Get all images
// @access  Public
router.get("/", getAllImages); // getAllImages is a function devoloped in the controllers\imagesController.js file to handle the request

// @route   POST api/images/add
// @desc    Add new image
// @access  Public
router.post("/add", addImage);

// @route   PUT api/images/:id
// @desc    Update image
// @access  Public
router.put("/:id", (req, res) => {
  res.send("Update image");
});

// @route   DELETE api/images/:id
// @desc    Delete image
// @access  Public
router.delete("/:id", (req, res) => {
  res.send("Delete image");
});

// export the router to be used in other files specially in the index.js file 
module.exports = router; 
