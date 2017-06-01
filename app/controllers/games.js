'use strict'

const controller = require('lib/wiring/controller')
const getGames = require('../../lib/gameAPI')
const parser = require('xml2json')


const index = (req, res, next) => {
  const query = "Horizon Zero Dawn"
  getGames(query)
  .then((games) => {
    const result = parser.toJson(games)
    res.set('Content-Type', 'application/json');
    res.send(result)
  })
  .catch(next)
}

module.exports = controller({
  index
})
