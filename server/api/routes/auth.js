const express = require('express');
const app = express.Router();

const bcrypt = require('bcryptjs');

const { User } = require('../../db');
const { exists, formatError } = require('../../utility/check');
const { getToken } = require('../../utility/token');


/**
 * @path /api/auth
 * @method POST
 */
app.post('/', async (req, res) => {
  const email = exists(req.body.email);
  const password = exists(req.body.password);

  formatError([email, password], res);

  try {
    const user = await User.findOne({ email }, '-__v', { lean: true });

    if (user === null) return res.status(404).json({ error: "User not found" });

    const is_valid_password = bcrypt.compareSync(password, user.password);

    if (!is_valid_password) return res.status(404).json({ error: "User not found" });

    const token = getToken({ _id: user._id, email: user.email });

    return res.status(201).json({ token });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = app;
