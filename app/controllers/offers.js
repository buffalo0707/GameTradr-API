'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Offer = models.offer

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  let query = {}
  if (req.query.owner) {
    query = {_owner: req.query.owner}
  }
  Offer.find(query)
    .then(offers => res.json({
      offers: offers.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const getListingOffer = (req, res, next) => {
  console.log('inside Get Listing Offer. id is', req.params.id )
  Offer.find({_listing: req.params.id})
    .then(offers => res.json({
      offers: offers.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    offer: req.offer.toJSON({ virtuals: true, user: req.user })
  })
}

const create = (req, res, next) => {
  const offer = Object.assign(req.body, {
    _owner: req.user._id
  })
  Offer.create(offer)
    .then(offer =>
      res.status(201)
        .json({
          offer: offer.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}
const update = (req, res, next) => {
  delete req.body._owner  // disallow owner reassignment.
  console.log(req.offer)
  req.offer.update(req.body)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.offer.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
  getListingOffer
}, { before: [
  // { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show', 'match'] },
  { method: setModel(Offer), only: ['show','match', 'update','destroy'] }
] })
