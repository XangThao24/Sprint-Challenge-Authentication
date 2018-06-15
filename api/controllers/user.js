const User = require('../models/userModels');
const { mysecret } = require('../../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User.create({username, password})
    .then((user) => {
      const payload = {
        username: user.username
      }; // what will determine our payload.
      const token = jwt.sign(payload, mysecret); // creates our JWT with a secret and a payload and a hash.
      res.json({ token });
      res.status(201).json({username, token, id});
    })
    .catch(err => {
      res.status(500).json(err)
    })
};

module.exports = {
  createUser
};

