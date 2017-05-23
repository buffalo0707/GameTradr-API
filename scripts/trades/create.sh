#!/bin/bash

API="http://localhost:4741"
URL_PATH="/trades"
TOKEN="er4H7palCQtm1HPRYsscEuHddDTVNP5etRVvsOyyrV8=--dqwjduxeLgnZ4h1+UK536wEMHwesVxWECA3oS097FiY="
NAME="TestGame"
SYSTEM="PS4"
NAME2="NewGame"
SYSTEM2="PS4"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "trade": {
      "gameForTrade": {
        "name": "'"${NAME}"'",
        "system": "'"${SYSTEM}"'"
      },
      "lookingFor": [{
        "name": "'"${NAME2}"'",
        "system": "'"${SYSTEM2}"'"
      }],
      "status": "active"
    }
  }'
echo
