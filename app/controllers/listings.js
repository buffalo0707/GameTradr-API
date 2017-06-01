'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Listing = models.listing

const authenticate = require('./concerns/authenticate')
// const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  let query = {}
  if (Object.keys(req.query).length > 0) {
    query = {lookingFor:{$elemMatch: {name: req.query.name, system: req.query.system}}}
  }
  Listing.find(query)
    .then(listings => res.json({
      listings: listings.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}
const match = (req, res, next) => {
  console.log(req.listing.lookingFor);
  Listing.find({
    game: {
      $elemMatch: {
        name: req.listing.game.name,
        system: req.listing.game.system
      }
    },
    wanted: {
      $elemMatch: {
        name: req.listing.wanted.name,
        system: req.listing.wanted.system
      }
    },
  })
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
const update = (req, res, next) => {
  delete req.body._owner  // disallow owner reassignment.
  req.listing.update(req.body.listing)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.listing.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
  match
}, { before: [
  // { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show', 'match'] },
  { method: setModel(Listing), only: ['show','match'] },
  { method: setModel(Listing, { forUser: true }), only: ['update', 'destroy'] }
] })
