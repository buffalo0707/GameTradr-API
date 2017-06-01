'use strict'

const controller = require('lib/wiring/controller')
const getGames = require('../../lib/gameAPI')
const parser = require('xml2json')


const index = (req, res, next) => {
  console.log(req.query);
  let query = `?name=${req.query.name}`
  console.log(query);
  if (req.query.platform) {
    query += `&platform=${req.query.platform}`
  }
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
