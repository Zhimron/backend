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
    image: {
      public_id:{
        type: String,
        required: true
      },
      url:{
        type:String,
        required:true
      }
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Travel", travelSchema);
