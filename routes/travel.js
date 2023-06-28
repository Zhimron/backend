const express = require("express")

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
router.post('/',(req,res) =>{
    res.json({mssg:'Post a Travel'})
})
router.delete("/", (req, res) => {
  res.json({ mssg: "Delete a Travel" });
});
router.patch("/", (req, res) => {
  res.json({ mssg: "Update a Travel" });
});
module.exports = router 