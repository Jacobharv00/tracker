const express = require( 'express' )

const router = express.Router()

router.post( '/signup', ( rec, res ) => {
  res.send( 'You made a post request' )
} )

module.exports = router