const express = require('express');
const router = express.Router();
const authController= require('../controller/authController');


//user apis
router.post('/user/register', authController.registerUser);
router.post('/user/login',authController.loginUser)
router.post('/user/logout',authController.logoutUser);

//food partner apis
router.post('/food-partner/register',authController.registerFoodpartner);
router.post('/food-partner/login',authController.loginFoodpartner);
router.post('/food-partner/logout',authController.logoutFoodpartner)


module.exports = router;