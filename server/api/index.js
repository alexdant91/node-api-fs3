const express = require('express');
const app = express.Router();

/**
 * @path /api/status
 * @method GET
 */
app.get('/status', (_, res) => {
  return res.status(200).json({ status: "Online" }) // 200 - OK
});

/**
 * /api/auth
 */
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

/**
 * /api/users
 */
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

module.exports = app;
