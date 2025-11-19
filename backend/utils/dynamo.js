const AWS = require("aws-sdk");

AWS.config.update({
    region: process.env.AWS_REGION || "us-east-1",
    endpoint: process.env.LOCALSTACK_URL || "http://localhost:4566",
});

const ddb = new AWS.DynamoDB.DocumentClient();

module.exports = { ddb };
