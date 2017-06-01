#!/bin/bash

API="http://localhost:4741"
URL_PATH="/listings"
TOKEN="VTFxkxZoAaNRQMiOlkwD2K9s2Tm4I+Id12WBvmWCUwI=--d/K+NWW9C/uMUoSg1Kt5wEPUY1+j3VfzvLHXb8f5O+k="
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
      "wanted": [{
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
