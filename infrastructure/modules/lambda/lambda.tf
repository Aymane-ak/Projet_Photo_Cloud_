resource "aws_lambda_function" "auth_signup" {
  function_name = "auth-signup"
  runtime       = "nodejs18.x"
  handler       = "functions/auth/signup.handler"
  role          = "arn:aws:iam::000000000000:role/lambda-role"

  filename = "${path.module}/../../backend/functions/auth/signup.zip"
}
