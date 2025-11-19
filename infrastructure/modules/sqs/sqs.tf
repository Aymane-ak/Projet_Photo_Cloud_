resource "aws_sqs_queue" "process_queue" {
  name = "image-processing-queue"
}
