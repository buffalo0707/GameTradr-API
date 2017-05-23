#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-up"
EMAIL='test2@test.com'
PASSWORD='test'
NAME='Testy Testerson'
ADDRESS='9 Howard Road'
CITY='Bristol'
STATE='NH'

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'",
      "name": "'"${NAME}"'",
      "address": {
        "address": "'"${ADDRESS}"'",
        "city": "'"${CITY}"'",
        "state": "'"${STATE}"'"
      }
    }
  }'

echo
