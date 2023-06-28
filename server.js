require('dotenv').config()
const express = require('express')
//express 
const myapp = express()

myapp.use(express.json())

const travelRoutes = require('./routes/travel')

myapp.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routes for travel
myapp.use('/api/travel',travelRoutes);

myapp.listen(process.env.PORT,()=>{console.log("You look Lonely", process.env.PORT);})

