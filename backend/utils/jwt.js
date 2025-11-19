const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "local-secret";

module.exports.sign = (payload) => {
    return jwt.sign(payload, SECRET, { expiresIn: "7d" });
};

module.exports.verify = (token) => {
    try {
        return jwt.verify(token, SECRET);
    } catch (err) {
        return null;
    }
};
