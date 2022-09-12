const User = require("../models/userSchema")
const bcrypt =require("bcrypt")
const{validate}= require("../config/validator")
//add a user
const addUser =async(req,res)=>{
    const{username,email,password}=req.body;
    const vaild = validate({username,email,password});
    if (vaild) {

        constheadpassword =await <bcryptjs bcryptjs(vaild.password, 8)
        const saveUser = await username.create({
            username,
            email,
            password,

        });
       res.status(201).jons({
        success:true,
        message:"user created",
        savedUser,
       });
    } else {
        res.status(400).json({
            error: true,
            message: "Ivalid data",
        });
    }
}

