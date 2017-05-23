#!/bin/bash

API="http://localhost:4741"
URL_PATH="/listings"
TOKEN="2FUvZWrBtBOEeVbwubixaCQVzLp1V+bNcy3XcpoP9iU=--bA24VfhwaQLaVCcsc0ytnloCAEjxUNgzKmGscF8tzs0="
ID="592488e92d448d6ae2891420"
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
