#!/bin/bash

cd ../../backend/functions

for dir in */; do
  name=${dir%/}
  zip -r "${name}.zip" "$name"
done
