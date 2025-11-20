variable "api_name" {
  type = string
}

variable "region" {
  type = string
}

variable "auth_signup_lambda_arn" {
  type = string
  description = "ARN de la Lambda pour /signup"
}
