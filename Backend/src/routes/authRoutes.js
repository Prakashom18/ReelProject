const express = require('express');
const router = express.Router();
const authController= require('../controller/authController');

router.post('/user/register', authController.registerUser);
router.post('/user/login',authController.loginUser)
// router.post('/user/register',authController);
// router.post('/user/login',loginContoller)

module.exports = router;