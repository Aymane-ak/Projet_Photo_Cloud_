const { putUser } = require("../../models/userModel");
const { success, error } = require("../../utils/response");
const bcrypt = require("bcryptjs");

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const { email, password } = body;

        if (!email || !password) {
            return error("Email & password required", 400);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await putUser({
            email,
            password: hashedPassword,
        });

        return success({ message: "User registered" }, 201);
    } catch (err) {
        console.error(err);
        return error("Signup failed", 500);
    }
};
