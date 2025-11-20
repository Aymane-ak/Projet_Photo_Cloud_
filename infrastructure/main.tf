terraform {
  required_version = ">= 1.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

module "s3" {
  source      = "./modules/s3"
  bucket_name = "imagemanagerbucket"
}


module "dynamodb" {
  source = "./modules/dynamodb"

  user_table  = "Users"
  image_table = "Images"
}

module "sqs" {
  source     = "./modules/sqs"
  queue_name = "imageprocessingqueue"
}


module "lambda" {
  source        = "./modules/lambda"
  lambda_prefix = "auth"
  bucket_name   = "lambda-code"
}

module "apigateway" {
  source                   = "./modules/apigateway"
  api_name                 = "MyAPI"
  region                   = "us-east-1"
  auth_signup_lambda_arn   = module.lambda.auth_signup_lambda_arn
}

