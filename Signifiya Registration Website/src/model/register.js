const mongoose=require("mongoose")
const {model} = require("mongoose");
const userData=mongoose.Schema({
    "name":{
        type:String,
        require:true
    }

})

const Register= new mongoose.model("userData",userData)
module.exports=Register