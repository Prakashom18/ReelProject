const express = require('express');
const app = express();

app.use(express.json())
const authController = require('../src/controller/authController')
app.get('/',(req,res)=>{
    res.send('Homepage');
})

app.use('/reg',authController);


module.exports = app;
