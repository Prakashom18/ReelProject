const userModel = require('../models/userModel');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
    const token = jwt.sign()
}



module.exports = router;
