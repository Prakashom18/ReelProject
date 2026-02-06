const userModel = require('../models/userModel');
const foodpartnerModel = require('../models/foodpartnerModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
    const { fullname, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedpass = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullname,
        email,
        password: hashedpass
    });

    const token = jwt.sign(
        { id: user._id },
          process.env.JWT_SECRET
    );

    res.cookie('token', token);

    res.status(201).json({
        message: 'User registered successfully',
        user: {
            _id: user._id,
            email: user.email,
            fullname: user.fullname
        }
    });
}

async function loginUser(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET
    );

    res.cookie('token', token);
    res.json({ message: 'Login successful' });
}

async function logoutUser(req,res){

    res.cookie('token',"");
    res.status(200).json({
        message : "user logged out success"
    })
    
}

async function registerFoodpartner(req,res){
    const {email,password,name} = req.body;
    const isRegistered = await foodpartnerModel.findOne({email})
    if(isRegistered){
        return res.status(400).json({
            message : "Already registered food partner"
        })
    }
    const hashedpassword = await bcrypt.hash(password,10);
    const registerFoodpartner = foodpartnerModel.create({
       name,
        email ,
        password :hashedpassword ,
         
    })
    const token = jwt.sign({
        id:registerFoodpartner._id
    },process.env.JWT_SECRET);
    res.cookie('token',token);
    res.status(201).json({
        message:{
            _id : registerFoodpartner._id,
            name : registerFoodpartner.name,
            email : registerFoodpartner.email,
            password : registerFoodpartner.password
        }
    })

}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodpartner
};
