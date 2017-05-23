#!/bin/bash

API="http://localhost:4741"
URL_PATH="/listings"
TOKEN="2FUvZWrBtBOEeVbwubixaCQVzLp1V+bNcy3XcpoP9iU=--bA24VfhwaQLaVCcsc0ytnloCAEjxUNgzKmGscF8tzs0="
NAME="TestGame"
SYSTEM="PS4"
NAME2="NewGame"
SYSTEM2="PS4"
NAME3="OtherNewGame"
SYSTEM3="Xbox One"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "listing": {
      "game": {
        "name": "'"${NAME}"'",
        "system": "'"${SYSTEM}"'"
      },
      "lookingFor": [{
        "name": "'"${NAME2}"'",
        "system": "'"${SYSTEM2}"'"
      },
      {
        "name": "'"${NAME3}"'",
        "system": "'"${SYSTEM3}"'"
      }],
      "status": "active"
    }
  }'
echo
