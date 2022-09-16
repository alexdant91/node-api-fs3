const mongoose = require('mongoose');

const connect = () => mongoose.connect(process.env.MONGODB_ATLAS_URL, (err) => {
  if (err) throw err;

  console.log("MongoDB connected....");
});

const disconnect = async () => {
  try {
    await mongoose.disconnect();
  } catch (err) {
    throw err;
  }
};

const models = {
  User: require('./models/User'),
}

module.exports = {
  connect,
  disconnect,
  ...models,
}
