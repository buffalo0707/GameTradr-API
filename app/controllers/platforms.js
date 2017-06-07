'use strict'

const controller = require('lib/wiring/controller')
const getSystems = require('../../lib/platformAPI')
const parser = require('xml2json')


const index = (req, res, next) => {
  getSystems()
  .then((systems) => {
    const result = parser.toJson(systems)
    res.set('Content-Type', 'application/json');
    res.send(result)
  })
  .catch(next)
}

module.exports = controller({
  index
})
