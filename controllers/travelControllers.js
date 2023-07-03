const Travel = require("../models/travelmodel");



//get all travels
const getTravel = async (req,res) => { 
    const travel = await Travel.find({}).sort({createdAt:-1})
    res.status(200).json(travel)
}
//get single travel
const getTravel = async (req,res)
//create
const createTravel = async (req,res) => {const { place, from, to, experience } = req.body;
try {
  const travel = await Travel.create({ place, from, to, experience });
  res.status(200).json(travel);
} catch (error) {
  res.status(400).json({ error: error.message });
}}
//delete

//update


module.exports = {createTravel}