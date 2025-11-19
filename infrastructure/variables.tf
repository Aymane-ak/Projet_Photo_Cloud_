#######################################
# Variables Globales
#######################################

variable "region" {
  type = string
  default = "us-east-1"
}

#######################################
# S3
#######################################

variable "bucket_name" {
  description = "Nom du bucket pour stocker les images"
  default     = "images-bucket"
}

#######################################
# DynamoDB
#######################################

variable "user_table" {
  type    = string
  default = "Users"
}

variable "image_table" {
  type    = string
  default = "Images"
}


#######################################
# Lambda
#######################################

variable "lambda_path" {
  description = "Chemin des lambdas à zipper"
  default     = "../backend/functions"
}

#######################################
# API Gateway
#######################################
variable "api_name" {
  type    = string
  default = "photo-cloud-api"
}

