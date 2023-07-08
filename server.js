require("dotenv").config();
const cors = require("cors");

const mongoose = require("mongoose");
const express = require("express");
const travelRoutes = require("./routes/travel");
const cloudinary = require("./utils/uploadimg");
//express
const myapp = express();
myapp.use(cors());
myapp.use(express.json());

myapp.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes for travel
myapp.use("/api/travel", travelRoutes);

//connect database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //request
    myapp.listen(process.env.PORT, () => {
      console.log("You look Lonely", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
