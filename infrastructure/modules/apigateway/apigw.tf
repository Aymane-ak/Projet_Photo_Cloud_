resource "aws_api_gateway_rest_api" "api" {
  name = var.api_name
}

resource "aws_api_gateway_resource" "signup" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  parent_id   = aws_api_gateway_rest_api.api.root_resource_id
  path_part   = "signup"
}

resource "aws_api_gateway_method" "post_signup" {
  rest_api_id   = aws_api_gateway_rest_api.api.id
  resource_id   = aws_api_gateway_resource.signup.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda_signup" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  resource_id = aws_api_gateway_resource.signup.id
  http_method = aws_api_gateway_method.post_signup.http_method
  type        = "AWS_PROXY"
  integration_http_method = "POST"
  uri         = module.lambda.auth_signup_lambda_arn
}

output "api_url" {
  value = aws_api_gateway_rest_api.api.execution_arn
}
