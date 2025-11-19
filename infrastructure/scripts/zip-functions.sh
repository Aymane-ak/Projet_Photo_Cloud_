#!/bin/bash
cd ../../backend/functions
for f in */*.js; do
  name=$(basename $f .js)
  zip -j "$name.zip" $f
done
