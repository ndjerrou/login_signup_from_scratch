const mongoose = require('mongoose');
const User = require('./user.model');
const bcrypt = require('bcrypt');
const _ = require('underscore');

module.exports = {
  signup: async (req, res) => {
    // verification avec Joi...

    let user = await User.findOne({ email: req.body.email }).exec();

    if (user)
      return res.status(400).send({ ok: false, msg: 'Account already exists' });

    user = {
      ...req.body,
      password: await bcrypt.hash(req.body.password, 10),
    };

    const newUser = new User(user);

    try {
      newUser.save();
      res
        .status(201)
        .send({ ok: true, data: _.pick(newUser, 'login', 'email') });
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ ok: false, msg: 'Internal server error' });
    }
  },
  login: null,
};
