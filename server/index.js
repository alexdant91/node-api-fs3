require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
const helmet = require('helmet');
const db = require('./db');

app.use(cors());
app.use(helmet());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

/**
 * @path / || /status || ping ->  http://localhost:3030/ || http://localhost:3030/status || http://localhost:3030/ping
 * @method GET
 */
app.get(['/', '/status', '/ping'], (_, res) => {
  return res.status(200).json({ status: "Online" }) // 200 - OK
});

/**
 * http://localhost:3030/api/....
 */
const apiRoutes = require('./api');
app.use('/api', apiRoutes);

// Connect to MongoDB
db.connect();

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server up and running on http://localhost:${process.env.SERVER_PORT}...`);
});
