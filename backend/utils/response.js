module.exports.success = (body) => ({
    statusCode: 200,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
});

module.exports.error = (status, message) => ({
    statusCode: status,
    body: JSON.stringify({ error: message }),
    headers: { "Content-Type": "application/json" },
});
