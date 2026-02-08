const express = require('express');
const router = express.Router();
const foodController = require('../controller/foodController');
const authMiddleware = require('../midlleware/authMiddleware');

router.post('/',authMiddleware.authFoodPartnerMiddleware,foodController.createFood);


module.exports = router;
