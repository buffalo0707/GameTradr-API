'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Listing = models.listing
const Offer = models.offer

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  let query = {}
  if (req.query.owner) {
    query = {_owner: req.query.owner}
  }
  if (req.query.status) {
    query = {status: req.query.status}
  }
  Listing.find(query)
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
  const listing = Object.assign(req.body, {
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
  console.log(req.body)
  req.listing.update(req.body)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.listing.remove()
  .then(()=>{
    Offer.remove({_listing: req.listing.id})
    .catch(next)
  })
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy
}, { before: [
  // { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show', 'match'] },
  { method: setModel(Listing), only: ['show'] },
  { method: setModel(Listing, { forUser: true }), only: ['update', 'destroy'] }
] })
