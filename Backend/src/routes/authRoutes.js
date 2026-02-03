const express = require('express');
const router = express.Router();

router.post('/user/register',authController);

module.exports = router;