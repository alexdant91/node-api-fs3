const jwt = require('jsonwebtoken');

const getToken = (payload) => { // payload -> { _id: user._id, email: user.email }
  return jwt.sign(payload, process.env.SERVER_SECRET_KEY);
}

const verifyToken = (token) => {
  token = token.replace("Bearer ", "");
  return jwt.verify(token, process.env.SERVER_SECRET_KEY); // -> false || decriptedPayload
}

module.exports = {
  getToken,
  verifyToken,
}
