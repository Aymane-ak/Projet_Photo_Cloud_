#!/bin/bash

echo "➡ Zipping lambdas..."
./zip-functions.sh

echo "➡ Applying Terraform..."
cd ../
terraform init
terraform apply -auto-approve
