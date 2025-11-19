const { getPresignedUploadUrl } = require("../../utils/s3");
const { success, error } = require("../../utils/response");
const { verifyToken } = require("../../utils/jwt");

exports.handler = async (event) => {
    try {
        const auth = event.headers.Authorization || "";
        const user = verifyToken(auth.replace("Bearer ", ""));
        if (!user) return error("Unauthorized", 401);

        const { filename } = JSON.parse(event.body);
        if (!filename) return error("Filename required", 400);

        const url = await getPresignedUploadUrl(filename);

        return success({ uploadUrl: url });
    } catch (err) {
        console.error(err);
        return error("Failed to generate URL", 500);
    }
};
