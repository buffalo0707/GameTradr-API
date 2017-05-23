'use strict'

const mongoose = require('mongoose')

const tradeSchema = new mongoose.Schema({
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
  lookingFor: [{
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

const Trade = mongoose.model('Trade', tradeSchema)

module.exports = Trade
