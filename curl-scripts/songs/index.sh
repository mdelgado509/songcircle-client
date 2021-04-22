#!/bin/bash

API="http://localhost:4741"
URL_PATH="/songs"

curl "${API}${URL_PATH}?song%owner%5D=60806b8214d2ae5d8fda3af1" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
