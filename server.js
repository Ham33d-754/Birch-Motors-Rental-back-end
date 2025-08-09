//rquire
const express = require('express')
const mongoose = require('./config/db')
require('dotenv').config()
const cors = require('cors')
const app = express()
const User = require('./models/user')
const bcrypt = require('bcrypt')

//middleware
const methodOverride = require('method-override')
const port = process.env.PORT ? process.env.PORT : '3000'

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const firstAdmin = async () => {
  const admin = await User.findOne({ username: 'admin' })

  if (!admin) {
    const password = 'admin123'
    const hasedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS)
    )
    await User.create({
      username: 'admin',
      password: hasedPassword,
      email: 'admin@birchMotors.com',
      phone: '34556789',
      role: 'admin'
    })
    console.log('admin account created scucessfully')
  }
}
firstAdmin()

const authRouter = require('./routes/auth')
const garageRouter = require('./routes/garage')

app.get('/', firstAdmin, (req, res) => {
  res.send('connected')
})

app.use('/auth', authRouter)
app.use('/garage', garageRouter)


const carRouter = require('./routes/cars')

app.use('/car', carRouter)

app.listen(process.env.port, () => {
  console.log(`app listen on port ${port}`)
})
