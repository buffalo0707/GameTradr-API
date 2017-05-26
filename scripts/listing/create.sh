#!/bin/bash

API="http://localhost:4741"
URL_PATH="/listings"
TOKEN="d65DdMalAUIDWk4jhAhRyEcqKqkVF25d1ei+KT8CRnQ=--aHQHV2uU+A+mDfFmS2l6+QX7MrK36/yk1xiGZkEzlqc="
NAME="ThisThing"
SYSTEM="Wii"
NAME2="Halo"
SYSTEM2="Xbox"
NAME3="WhoKnows"
SYSTEM3="WiiU"
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
