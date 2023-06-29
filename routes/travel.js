const express = require("express")
const Travel = require('../models/travelmodel')
const router = express.Router()

//Get all
router.get('/',(req,res) => {
    res.json({mssg:'Get all the Travel Info'})
})

//Get single
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get specific Travel'})
})

//POST
router.post('/',async (req,res) =>{
    const {place,from,to,experience} = req.body

    try{
      const travel = await Travel.create({ place, from, to, experience });
      res.status(200).json(travel)
      } catch(error){
      res.status(400).json({error: error.message});
    }
})

router.delete("/", (req, res) => {
  res.json({ mssg: "Delete a Travel" });
});

router.patch("/", (req, res) => {
  res.json({ mssg: "Update a Travel" });
});

module.exports = router 