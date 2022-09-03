const express = require( 'express' )
const mongoose = require( 'mongoose' )

const app = express()

const mongoUri = 'mongodb+srv://Jharv1:Purple2018!@cluster0.rrppzbf.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect( mongoUri )

mongoose.connection.on( 'connected', () => {
  console.log( 'Connected to mongo instance' )
} )

mongoose.connection.on( 'error', ( err ) => {
  console.error( 'Error connecting to mongo', err )
} )

app.get( '/', ( request, response ) => {
  response.send( 'Hi there!' )
} )

app.listen( 3000, () => {
  console.log( 'Listening on port 3000' )
} )