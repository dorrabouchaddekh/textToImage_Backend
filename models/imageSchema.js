const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// schema to define the structure of the image object
const imageSchema = new Schema({
  title: {
    type: String,

  },
  image: {
    type: String,

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// export the imageSchema to be used in other files
module.exports = mongoose.model("Image", imageSchema);
