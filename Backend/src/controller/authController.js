const userModel = require('../models/userModel');
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('hello');
})

module.exports = router;
