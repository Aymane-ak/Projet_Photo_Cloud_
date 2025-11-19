const { dynamo } = require("../utils/dynamo");
const TABLE = "Users";

exports.putUser = async (user) => {
    return dynamo.put({
        TableName: TABLE,
        Item: user
    }).promise();
};
