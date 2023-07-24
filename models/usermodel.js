const mongoose = require("mongoose");
const { schema } = require("./travelmodel");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {
        type:string,
        require:true,
    },
     password: {
        type:string,
        require:true,
    } 
   
}, { timestamps: true });
module.exports = mongoose.model("User", usersSchema);
