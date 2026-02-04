const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const authRoutes = require('../src/routes/authRoutes')
app.use(express.json());
app.use(cookieParser());

const authController = require('../src/controller/authController')
app.get('/',(req,res)=>{
    res.send('Homepage');
})

app.use('/api/auth',authRoutes);


app.use('/reg',authController);


module.exports = app;
