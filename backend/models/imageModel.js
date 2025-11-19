const { ddb } = require("../utils/dynamo");

const TABLE = "Images";

module.exports.saveImage = async ({ email, filename, uploadedAt }) => {
    return ddb
        .put({
            TableName: TABLE,
            Item: {
                email,
                filename,
                uploadedAt,
            },
        })
        .promise();
};

module.exports.listImages = async (email) => {
    const res = await ddb
        .query({
            TableName: TABLE,
            KeyConditionExpression: "email = :e",
            ExpressionAttributeValues: {
                ":e": email,
            },
        })
        .promise();

    return res.Items || [];
};
