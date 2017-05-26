#!/bin/sh
API="http://localhost:4741"
URL_PATH="/match"
ID='59277ab77a364d2198389174'
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET
echo
