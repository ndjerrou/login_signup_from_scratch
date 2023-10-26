const express = require('express');
const { signup } = require('../resources/user.controller');
const router = express.Router();

router.route('/signup').post(signup);

module.exports = router;