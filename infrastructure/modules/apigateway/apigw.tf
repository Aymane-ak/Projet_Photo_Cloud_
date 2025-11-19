resource "aws_apigatewayv2_api" "http_api" {
  name          = "image-api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "default" {
  api_id      = aws_apigatewayv2_api.http_api.id
  name        = "$default"
  auto_deploy = true
}

output "invoke_url" {
  value = aws_apigatewayv2_api.http_api.api_endpoint
}
