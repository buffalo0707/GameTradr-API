'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Listing = models.listing

const authenticate = require('./concerns/authenticate')
// const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  Listing.find()
    .then(listings => res.json({
      listings: listings.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    listing: req.listing.toJSON({ virtuals: true, user: req.user })
  })
}

const create = (req, res, next) => {
  const listing = Object.assign(req.body.listing, {
    _owner: req.user._id
  })
  Listing.create(listing)
    .then(listing =>
      res.status(201)
        .json({
          listing: listing.toJSON({ virtuals: true, user: req.user })
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
  { method: setModel(Listing), only: ['show'] }
  // { method: setModel(Listing, { forUser: true }), only: ['update', 'destroy'] }
] })
