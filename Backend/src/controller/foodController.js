const foodModel = require('../models/foodModel');
const storageService = require('../services/storage.service');
// const express = require('express');
// const router = express.Router();


async function createFood(req,res){
    console.log(req.foodPartner);
    console.log(req.file);
    res.send('Food item created');

    const fileUploadResult = await 
}


module.exports = {
    createFood
};