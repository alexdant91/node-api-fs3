const { User } = require('../db');
const { verifyToken } = require('../utility/token');

const authUser = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(403).json({ error: "Not authorized" });

  try {
    const decodedToken = verifyToken(token);

    if (!decodedToken) return res.status(403).json({ error: "Not authorized" });

    const user = await User.findOne({ _id: decodedToken._id }, '-__v -password', { lean: true });

    if (user === null) return res.status(403).json({ error: "Not authorized" });

    req.user = user;

    return next();
  } catch (err) {
    console.log(err);
    return res.status(403).json({ error: "Not authorized" });
  }

}

const authRole = (role = "USER") => (req, res, next) => {
  const user = req.user;

  if (user.role === role) {
    delete req.user.role;
    return next();
  }

  return res.status(403).json({ error: "Not authorized" });
}

module.exports = {
  authUser,
  authRole,
}
