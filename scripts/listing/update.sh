#!/bin/bash

API="http://localhost:4741"
URL_PATH="/listings"
TOKEN="2FUvZWrBtBOEeVbwubixaCQVzLp1V+bNcy3XcpoP9iU=--bA24VfhwaQLaVCcsc0ytnloCAEjxUNgzKmGscF8tzs0="
ID="59248a5e2d448d6ae2891423"
NAME="NewGame"
SYSTEM="PS4"
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --query 'test'

echo
