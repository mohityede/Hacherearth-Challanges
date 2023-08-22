const express = require('express');

const constrollers = require('../controller/appControllers');

const router = express.Router();

// console.log(constrollers.getAllUsers)
router.get("/allUsers", constrollers.getAllUsers);

module.exports = router;