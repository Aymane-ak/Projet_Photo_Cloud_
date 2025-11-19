const bcrypt = require("bcryptjs");
const { putUser } = require("../../models/userModel");

exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const { email, password } = body;

    const hashed = bcrypt.hashSync(password, 10);

    await putUser({ email, password: hashed });

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "User created" })
    };
};
