#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-in"
EMAIL='test30@test.com'
PASSWORD='test'

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
  }'

echo
