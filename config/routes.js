'use strict'

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')
.resources('listings')
.resources('trades', { only: ['index', 'show', 'create'] })
.get('/match/:id', 'listings#match')
.resources('games', {only: ['index']})
.resources('platforms', {only: ['index']})
.resources('offers')


// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show'] })
