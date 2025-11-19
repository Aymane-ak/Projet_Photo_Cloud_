const { listImages } = require("../../models/imageModel");
const { success, error } = require("../../utils/response");
const { verifyToken } = require("../../utils/jwt");

exports.handler = async (event) => {
    try {
        const auth = event.headers.Authorization || "";
        const user = verifyToken(auth.replace("Bearer ", ""));
        if (!user) return error("Unauthorized", 401);

        const images = await listImages(user.email);

        return success({ images });
    } catch (err) {
        console.error(err);
        return error("Failed to list images", 500);
    }
};
