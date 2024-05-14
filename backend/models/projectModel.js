/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    project_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    project_name: {
      type: String,
      required: true,
    },
    path_to_thumbnail_photo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
