const { getUser } = require("../../models/userModel");
const { success, error } = require("../../utils/response");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../../utils/jwt");

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const { email, password } = body;

        const user = await getUser(email);
        if (!user) return error("User not found", 404);

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return error("Invalid credentials", 401);

        const token = generateToken({ email });

        return success({ token });
    } catch (err) {
        console.error(err);
        return error("Login failed", 500);
    }
};
