const foodModel = require('../models/foodModel');
const storageService = require('../services/storage.service');
// const express = require('express');
// const router = express.Router();
const {v4:uuid} = require('uuid')

async function createFood(req,res){
    console.log(req.foodPartner);
    console.log(req.file);
    res.send('Food item created');

    const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid())
    console.log(fileUploadResult)
}

async function showFood(req,res){
    console.log(req.file);
}

module.exports = {
    createFood,showFood
};
