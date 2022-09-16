const express = require('express');
const app = express.Router();

const bcrypt = require('bcryptjs');

const { exists } = require('../../utility/check');
const { formatError } = require('../../utility/check');

const { User } = require('../../db');
const { authUser, authRole } = require('../../middleware/auth');

/**
 * @path /api/users
 * @method POST
 */
app.post('/', async (req, res) => {
  const email = exists(req.body.email);
  const _password = exists(req.body.password);
  const first_name = exists(req.body.first_name);
  const last_name = exists(req.body.last_name);

  formatError([email, _password, first_name, last_name], res);

  const password = bcrypt.hashSync(_password, 12);

  try {
    const user = await new User({
      email,
      password,
      first_name,
      last_name,
    }).save();

    delete user.password;

    return res.status(201).json({ user });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @path /api/users/me
 * @method GET
 */
app.get('/me', authUser, authRole('USER'), (req, res) => {
  return res.status(200).json({ ...req.user });
});

module.exports = app;
