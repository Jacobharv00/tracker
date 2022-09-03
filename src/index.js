require( './models/User' )
const express = require( 'express' )
const mongoose = require( 'mongoose' )
const bodyParser = require( 'body-parser' )
const mongoUri = require( '../config.js' )
const requireAuth = require( './middlewares/requireAuth' )

const authRoutes = require( './routes/authRoutes' )

const app = express()

app.use( bodyParser.json() )
app.use( authRoutes )

mongoose.connect( mongoUri )

mongoose.connection.on( 'connected', () => {
  console.log( 'Connected to mongo instance' )
} )

mongoose.connection.on( 'error', ( err ) => {
  console.error( 'Error connecting to mongo', err )
} )

app.get( '/', requireAuth, ( req, res ) => {
  res.send( `Your email: ${req.user.email}` )
} )

app.listen( 3000, () => {
  console.log( 'Listening on port 3000' )
} )