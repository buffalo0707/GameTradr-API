'use strict'

const controller = require('lib/wiring/controller')
const getGames = require('../../lib/gameAPI')

const unirest = require('unirest');


const index = (req, res, next) => {
  getGames()
  .then(uploads => res.json({
    uploads: uploads
  }))
  .catch(next)
}

module.exports = controller({
  index
})
