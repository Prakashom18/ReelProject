const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

const authController = require('../src/controller/authController')
app.get('/',(req,res)=>{
    res.send('Homepage');
})

app.use('/reg',authController);


module.exports = app;
