const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log(`connected to ${mongoose.connection.name}`)
})

module.exports = mongoose
