const foodModel = require('../models/foodModel');
const express = require('express');
const router = express.Router();


async function createFood(req,res){
    console.log(req.foodPartner)
    res.send('Food item created');


}


module.exports = router;