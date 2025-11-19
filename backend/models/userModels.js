const { ddb } = require("../utils/dynamo");

const TABLE = "Users";

module.exports.putUser = async (user) => {
    return ddb
        .put({
            TableName: TABLE,
            Item: user,
        })
        .promise();
};

module.exports.getUser = async (email) => {
    const res = await ddb
        .get({
            TableName: TABLE,
            Key: { email },
        })
        .promise();

    return res.Item || null;
};
