const express = require('express');
const router = express.Router();
const registerUser= require('../controllers/userController');

router.post('/user/register', registerUser);

// router.post('/user/register',authController);
// router.post('/user/login',loginContoller)

module.exports = router;