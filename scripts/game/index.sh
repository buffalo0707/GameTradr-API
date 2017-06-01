#!/bin/sh

API="http://localhost:4741"
URL_PATH="/games"
GAME="Halo+4"
curl "${API}${URL_PATH}/?game=${GAME}" \
  --include \
  --request GET
echo
