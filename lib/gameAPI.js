'use strict'
// this loads our environment variables and gives
// us access to them via process.env.VARIABLENAME
require('dotenv').load()
const unirest = require('unirest');
const getGames = function () {
  return new Promise((resolve, reject) => {
    unirest.get("https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=10&offset=0&order=release_dates.date%3Adesc&search=zelda")
.header("X-Mashape-Key", process.env.MASHAPE_KEY)
.header("Accept", "application/json")
.end(function (result) {
  resolve(result.body)
    });
  })
}

module.exports = getGames
