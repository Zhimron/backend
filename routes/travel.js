const express = require("express");
const {
  createTravel,
  getTravel,
  getTravels,
  getTravelArchive,
  deleteTravel,
  updateTravel,
} = require("../controllers/travelControllers");

const router = express.Router();

//Get all
router.get("/", getTravels);
router.get("/archive", getTravelArchive);

//Get single
router.get("/:id", getTravel);

//POST
router.post("/", createTravel);

router.delete("/:id", deleteTravel);

router.patch("/:id", updateTravel);

module.exports = router;
