'use strict'

const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  _listing:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing',
    required: true
  },
  game: {
    name: {
      type: String,
      required: true
    },
    system: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
      }
  },
  offeredGame: {
    name: {
      type: String,
      required: true
    },
    system: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
      }
  },
  status: {
    enum: ['new', 'declined', 'accepted' ],
    type: String,
    required: true,
    default: 'new'
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, options) {
      const userId = (options.user && options.user._id) || false
      ret.editable = userId && userId.equals(doc._owner)
      return ret
    }
  }
})

const Offer = mongoose.model('Offer', offerSchema)

module.exports = Offer
