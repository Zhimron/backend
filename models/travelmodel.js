const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema(
  {
    user: {
      type: String,
      require: true,
    },
    place: {
      type: String,
      require: true,
    },
    from: {
      type: String,
      require: true,
    },
    to: {
      type: String,
      require: true,
    },
    experience: {
      type: String,
      require: true,
    },
    archive: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Travel", travelSchema);
