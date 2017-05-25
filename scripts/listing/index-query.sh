#!/bin/sh

API="http://localhost:4741"
URL_PATH="/listings"
NAME="NewGame"
SYSTEM="PS4"
curl "${API}${URL_PATH}/?name=${NAME}&system=${SYSTEM}" \
  --include \
  --request GET

echo
