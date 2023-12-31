const Travel = require("../models/travelmodel");
// const cloudinary = require("../utils/uploadimg");
const mongoose = require("mongoose");

//get all travels
const getTravels = async (req, res) => {
  const travel = await Travel.find({ archive: "Active" }).sort({
    createdAt: -1,
  });
  res.status(200).json(travel);
};
const getTravelArchive = async (req, res) => {
  const travel = await Travel.find({ archive: "Not Active" }).sort({
    createdAt: -1,
  });
  res.status(200).json(travel);
};

//get single travel
const getTravel = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Travel Id" });
  }

  const travel = await Travel.findById(id);

  if (!travel) {
    return res.status(404).json({ error: "No Record of Travel" });
  }
  res.status(200).json(travel);
};

//create
const createTravel = async (req, res) => {
  const { place, from, to, experience } = req.body;
  try {
    const travel = await Travel.create({ place, from, to, experience });
    res.status(200).json(travel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete
const deleteTravel = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Travel Id" });
  }
  const travel = await Travel.findOneAndDelete({ _id: id });

  if (!travel) {
    return res.status(404).json({ error: "No Record of Travel" });
  }
  res.status(200).json(travel);
};

//update
const updateTravel = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Travel Id" });
  }
  const travel = await Travel.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!travel) {
    return res.status(404).json({ error: "No Record of Travel" });
  }
  res.status(200).json(travel);
};

module.exports = {
  getTravel,
  getTravels,
  createTravel,
  deleteTravel,
  updateTravel,
  getTravelArchive,
};
