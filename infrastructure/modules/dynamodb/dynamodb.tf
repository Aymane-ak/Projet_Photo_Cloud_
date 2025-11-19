resource "aws_dynamodb_table" "users" {
  name         = var.user_table
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "email"
  attribute {
    name = "email"
    type = "S"
  }
}
