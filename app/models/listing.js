'use strict'

const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
      }
  },
  wanted: [{
    name: {
      type: String,
      required: true
    },
    system: {
      type: String,
      required: true
    }
  }],
  status: {
    enum: ['active', 'completed'],
    type: String,
    required: true,
    default: 'active'
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

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing
