const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const travelSchema = new Schema(
  {
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
  },
  { timestamps: true }
);
module.exports = mongoose.model("Travel", travelSchema);
