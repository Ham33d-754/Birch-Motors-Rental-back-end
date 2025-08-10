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
const userRouter = require('./routes/user')
const garageRouter = require('./routes/garage')
const carRouter = require('./routes/cars')

app.get('/', firstAdmin, (req, res) => {
  res.send('connected')
})
// use router
app.use('/auth', authRouter)
app.use('/profile', userRouter)
app.use('/garage', garageRouter)
app.use('/car', carRouter)

app.listen(port, () => {
  console.log(`app listen on port ${port}`)
})
