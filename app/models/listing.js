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
      required: true,
      enum: ['PS4', 'Xbox One', 'Switch', 'WiiU', 'Wii', 'Xbox 360', 'PS3', 'PS2', 'Xbox', 'Nindento DS', 'Nintendo 3DS']
    }
  },
  lookingFor: [{
    _id:false,
    name: {
      type: String,
      required: true
    },
    system: {
      type: String,
      required: true,
      enum: ['PS4', 'Xbox One', 'Switch', 'WiiU', 'Wii', 'Xbox 360', 'PS3', 'PS2', 'Xbox', 'Nindento DS', 'Nintendo 3DS']
    }
  }],
  status: {
    enum: ['active', 'completed'],
    type: String,
    required: true
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
