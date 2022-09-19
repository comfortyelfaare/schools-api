const mongoose = require("mongoose")

const schoolSchema = mongoose.Schema({
    schoolname:{
        type:String,
        required:true,
        unique:true
    },
    location: {
        type:String,
        require:true

    },
    category:{
        type:String,
        require:true
    },
    facilities:{
        type:Array,
        require:true,
        

    },
    numofstudent:{
        type:Number,
        require:true
    },
    Address:{
        gps:String,
        box:String
    },


    contact:{
        phone:String,
        email:String
    }
}, {

    timestamp:true
})
const school = mongoose.model("school", schoolSchema)
module.exports=school