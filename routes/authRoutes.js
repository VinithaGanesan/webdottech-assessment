const {
  registerUser,
  loginUser,
} = require("../controller/auth/authController");

const authRouter = require("express").Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

module.exports = authRouter;
