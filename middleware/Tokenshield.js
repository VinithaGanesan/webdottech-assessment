const jwt = require("jsonwebtoken");

/**
 * @param req
 * @param res
 * @param next
 *
 * Token shield helps us to check whether req.body has a Token inside it
 */

function TokenShield(req, res, next) {
  const token = req.headers.token;
  if (!token)
    return res.status(401).send({
      success: false,
      message: "Token missing or expired",
    });

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decodedToken) {
      req.user = decodedToken;
      next();
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal error",
    });
  }
}

module.exports = TokenShield;
