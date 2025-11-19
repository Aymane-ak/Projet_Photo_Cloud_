const { saveImage } = require("../../models/imageModel");

exports.handler = async (event) => {
    try {
        for (const record of event.Records) {
            const msg = JSON.parse(record.body);

            await saveImage({
                email: msg.email,
                filename: msg.filename,
                uploadedAt: Date.now(),
            });

            console.log("Image saved:", msg.filename);
        }

        return { status: "ok" };
    } catch (err) {
        console.error("SQS PROCESS ERROR:", err);
        throw err;
    }
};
