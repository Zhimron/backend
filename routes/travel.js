const express = require("express")
const {createTravel} = require("../controllers/travelControllers")
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
router.post('/', createTravel)

router.delete("/", (req, res) => {
  res.json({ mssg: "Delete a Travel" });
});

router.patch("/", (req, res) => {
  res.json({ mssg: "Update a Travel" });
});

module.exports = router 