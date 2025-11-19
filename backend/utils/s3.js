const AWS = require("aws-sdk");

AWS.config.update({
    region: process.env.AWS_REGION || "us-east-1",
    endpoint: process.env.LOCALSTACK_URL || "http://localhost:4566",
    s3ForcePathStyle: true,
});

const s3 = new AWS.S3();

module.exports.getPresignedUploadUrl = async (bucket, filename) => {
    return s3.getSignedUrlPromise("putObject", {
        Bucket: bucket,
        Key: filename,
        Expires: 3600, // 1h
    });
};

module.exports.listObjects = async (bucket, prefix) => {
    const res = await s3
        .listObjectsV2({
            Bucket: bucket,
            Prefix: prefix,
        })
        .promise();

    return res.Contents || [];
};
