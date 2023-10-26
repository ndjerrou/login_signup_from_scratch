const express = require('express');
const { signup } = require('../resources/user.controller');
const { login } = require('../resources/user.controller');
const router = express.Router();

router.route('/signup').post(signup);
router.route('/auth').post(login);

module.exports = router;
