#!/bin/bash

API="http://localhost:4741"
URL_PATH="/listings"
TOKEN="PlPAxFXop8opF3IyXa3J1BM+HWn9T9SvIvBaRRt6PzY=--dmSlqbPy4iJY9Sknod1bA8gWOZxHQ5hh3aJEz5yIdqk="
NAME="Halo"
SYSTEM="Xbox"
NAME2="ThisThing"
SYSTEM2="Wii"
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
