const express = require('express');
const router = express.Router();
const foodController = require('../controller/foodController');
const authMiddleware = require('../midlleware/authMiddleware');
const multer = require('multer');
router.post('/',authMiddleware.authFoodPartnerMiddleware,foodController.createFood);


module.exports = router;
