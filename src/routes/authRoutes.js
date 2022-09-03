const express = require( 'express' )
const mongoose = require( 'mongoose' )
const jwt = require( 'jsonwebtoken' )

const router = express.Router()
const User = mongoose.model( 'User' )

router.post( '/signup', async ( req, res ) => {
  const { email, password } = req.body
  try {
    const user = new User( { email, password } )
    await user.save()
    const token = jwt.sign( { userId: user._id }, 'MY_SECRET_KEY' )
    res.send( { token } )
  } catch ( error ) {
    // TODO: Change to user readable error message
    return res.status( 422 ).send( error.message )
  }
} )

module.exports = router