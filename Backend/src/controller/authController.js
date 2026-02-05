const userModel = require('../models/userModel');
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

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};
