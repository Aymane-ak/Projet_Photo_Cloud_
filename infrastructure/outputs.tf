output "api_url" {
  value = module.apigw.invoke_url
}

output "bucket_name" {
  value = var.bucket_name
}
