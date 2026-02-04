const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();




// router.get('/',(req,res)=>{
//     res.send('hello');
// })


async function registerUser(req,res){
    const {fullname,email,password} = req.body;
    let isUserExist = await userModel.findOne({email})
    if(isUserExist){
        return res.status(400).json(
            {message : 'User already Exists'});
    }

    const hashedpass = await bcrypt.hash(password,10);
    const user = await userModel.create({
        fullname,
        password : hashedpass,
        email 
    })
    const token = jwt.sign({
        id : user._id,
        
    },'secretkey123');
    res.cookie('token',token);
    res.status(201).json({
        message: "USer registered successfull",
        user:{
            _id : user._id,
            email : user.email,
            fullname : user.fullName
        }
    })
}



module.exports = router;
 