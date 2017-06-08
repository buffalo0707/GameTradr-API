#!/bin/bash

API="http://localhost:4741"
URL_PATH="/listings"
TOKEN="YcrR1fPcYTbYf+AkqQYAHQIZAIdndmHhJJNbYil0PCY=--+X0NiHY2yKE4+GZ98IHxV5+LvnlEQzzyWNpZpQBeEog="
NAME="Zelda"
SYSTEM="Switch"
ID=10
NAME2="Halo"
SYSTEM2="Xbox"
ID2=10
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
      "game": {
        "name": "'"${NAME}"'",
        "system": "'"${SYSTEM}"'",
        "id": "'"${ID}"'"
      },
      "wanted": {
        "name": "'"${NAME2}"'",
        "system": "'"${SYSTEM2}"'",
        "id": "'"${ID2}"'"
      },
      "status": "active"
  }'
echo
