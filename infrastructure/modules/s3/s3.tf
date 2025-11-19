resource "aws_s3_bucket" "images" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_acl" "acl" {
  bucket = aws_s3_bucket.images.id
  acl    = "private"
}
