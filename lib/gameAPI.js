'use strict'
// this loads our environment variables and gives
// us access to them via process.env.VARIABLENAME
require('dotenv').load()
const unirest = require('unirest');
const getGames = function (query) {
  return new Promise((resolve, reject) => {
    unirest.get("http://thegamesdb.net/api/GetGamesList.php?name=Halo")
// .header("X-Mashape-Key", process.env.MASHAPE_KEY)
// .header("Accept", "application/json")
.end(function (result) {
  resolve(result.body)
    });
  })
}

module.exports = getGames
