const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

function validateAuth(req, res, next) {
  try {
    console.log(req.headers);
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith("Bearer")) {
      const error = new Error("Authorization required");
      error.status = 403;
      throw error;
    }
    const accessToken = authorization.split(" ")[1];
    console.log(accessToken);
    const payload = jwt.verify(accessToken, JWT_SECRET);
    console.log(payload);
    //const { id, name, role } = payload;
    const { id, name, email } = payload;
    req.auth = { id, name, email };
    next();
  } catch (err) {
    res.status(401);
    res.send(err.message);
  }
}

module.exports = validateAuth;
