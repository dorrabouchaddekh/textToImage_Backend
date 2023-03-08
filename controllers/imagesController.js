const ImageSchema = require("../models/imageSchema");
// api to get all images
const getAllImages = async (_, res) => {
  try {
    // find all images in the database specially in the images collection
    const images = await ImageSchema.find();
    // send the images to the client side (flutter app)
    res.status(200).json(images);
    // if there is an error, send the error message to the client side
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// api to add new image to the database
const addImage = async (req, res) => {
  // get the image object (title , image) from the request body
  const image = req.body;
  // create a new image object using the imageSchema
  const newImage = new ImageSchema(image);
  try {
    // save the new image to the database
    await newImage.save();
    // send the new image to the client side (flutter app)
    res.status(201).json(newImage);
    // if there is an error, send the error message to the client side
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllImages,
  addImage,
};
