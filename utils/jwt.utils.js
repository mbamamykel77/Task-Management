import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/connect.js";

export function genToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };
  const token = jwt.sign(payload, jwtConfig.jwt_key, {
    expiresIn: 60 * 60 * 24,
  });
  return token;
}

export function authToken(token) {
  try {
    return jwt.verify(token, jwtConfig.jwt_key);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}
