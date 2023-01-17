const mongoose = require("mongoose");
const Schema = mongoose.Schema; //constructor function

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// model surrounds the schema and provides us with a way to communicate with DB collections
// model should be a singular
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
