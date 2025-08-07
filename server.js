//rquire
const express = require('express')
const mongoose = require('./config/db')
require('dotenv').config()
const cors = require('cors')
const app = express()
const methodOverride = require('method-override')

const port = process.env.PORT ? process.env.PORT : '3000'

app.use(methodOverride)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('connected')
})

app.listen(process.env.port, () => {
  console.log(`app listen on port ${port}`)
})
