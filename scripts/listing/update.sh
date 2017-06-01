#!/bin/bash

API="http://localhost:4741"
URL_PATH="/listings"
TOKEN="QqN400dQbmOzlJLlN+xNDz4TglfQeR7KsQXny7zBwSc=--iI5jGdc6RGOvW0eQ6/zkHNd2vYQr5/gXcRNJs7PGFWc="
ID="592fe66794a5c44be7b0e50f"
NAME="Horizon"
SYSTEM="PS4"
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "listing": {
      "game": {
        "name": "'"${NAME}"'",
        "system": "'"${SYSTEM}"'"
      }
    }
  }'

echo
