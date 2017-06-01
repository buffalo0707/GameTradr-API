#!/bin/bash

API="http://localhost:4741"
URL_PATH="/listings"
TOKEN="QqN400dQbmOzlJLlN+xNDz4TglfQeR7KsQXny7zBwSc=--iI5jGdc6RGOvW0eQ6/zkHNd2vYQr5/gXcRNJs7PGFWc="
NAME="Zelda"
SYSTEM="Switch"
NAME2="Halo"
SYSTEM2="Xbox"
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
      "wanted": {
        "name": "'"${NAME2}"'",
        "system": "'"${SYSTEM2}"'"
      },
      "status": "active"
    }
  }'
echo
