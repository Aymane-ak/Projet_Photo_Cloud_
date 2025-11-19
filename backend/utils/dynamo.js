const AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    endpoint: "http://localhost:4566"
});

exports.dynamo = new AWS.DynamoDB.DocumentClient();
