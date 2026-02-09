const express = require('express');
const router = express.Router();
const foodController = require('../controller/foodController');
const authMiddleware = require('../midlleware/authMiddleware');
const multer = require('multer');
r
const upload = multer({
    storage : multer.memoryStorage(),

}
)

outer.post('/',authMiddleware.authFoodPartnerMiddleware,
    upload.single('video'),foodController.createFood);


module.exports = router;
