const express = require("express");
const {
  createTravel,
  getTravel,
  getTravels,
  deleteTravel,
  updateTravel,
} = require("../controllers/travelControllers");

const router = express.Router();

//Get all
router.get("/", getTravels);

//Get single
router.get("/:id", getTravel);

//POST
router.post("/", createTravel);

router.delete("/:id", deleteTravel);

router.patch("/:id", updateTravel);

module.exports = router;
