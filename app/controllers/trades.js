'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Trade = models.trade

const authenticate = require('./concerns/authenticate')
// const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  Trade.find()
    .then(trades => res.json({
      trades: trades.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    trade: req.trade.toJSON({ virtuals: true, user: req.user })
  })
}

const create = (req, res, next) => {
  const trade = Object.assign(req.body.trade, {
    _owner: req.user._id
  })
  Trade.create(trade)
    .then(trade =>
      res.status(201)
        .json({
          trade: trade.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create
}, { before: [
  // { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(Trade), only: ['show'] }
  // { method: setModel(Trade, { forUser: true }), only: ['update', 'destroy'] }
] })
