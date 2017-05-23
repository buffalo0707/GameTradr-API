#!/bin/bash

API="http://localhost:4741"
URL_PATH="/trades"
TOKEN="5tZIfrF6wlHZ7SK6F0QzQiKwW1Wae9gPo293yRM7ruM=--TIRFctEeVhgSI3ZHLt+jD9WQ2b4zP0WPbVt/YyywM2Y="
NAME="TestGame"
SYSTEM="PS4"
NAME2="NewGame"
SYSTEM2="PS4"
NAME3="OtherNewGame"
SYSTEM3="Xbone"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "trade": {
      "parties": [{
        "user_id": "5924819a49c45a66fd18cf1e",
        "game": {
          "name": "'"${NAME}"'",
          "system": "'"${SYSTEM}"'"
        }
      },
      {
        "user_id": "5924819a49c45a66fd18cf1e",
        "game": {
          "name": "'"${NAME2}"'",
          "system": "'"${SYSTEM2}"'"
        }
      }]
    }
  }'
echo
