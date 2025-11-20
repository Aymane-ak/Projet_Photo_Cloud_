resource "aws_s3_bucket" "lambda_bucket" {
  bucket = var.bucket_name
}

resource "aws_lambda_function" "auth_signup" {
  function_name = "${var.lambda_prefix}-signup"
  runtime       = "nodejs18.x"
  handler       = "functions/auth/signup.handler"
  role          = "arn:aws:iam::000000000000:role/lambda-role"

  filename      = "${path.module}/signup_v2.zip"
}
