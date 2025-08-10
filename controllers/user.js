const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
exports.user_getUser_get = async (req, res) => {
  const userId = req.params.userId
  console.log(userId)
  const user = await User.findById(userId)
  return res.status(200).send({ user })
}
exports.user_getAll_get = async (req, res) => {
  const listOfUsers = await User.find()
  return res.status(200).send({ listOfUsers })
}
exports.user_editProfile_put = async (req, res) => {
  try {
    const userId = req.params.userId
    const { username, email, phone, password } = req.body
    const userdb = await User.findOne({
      $or: [{ username }, { email }, { phone }]
    })
    if (userdb && !userdb._id.equals(userId)) {
      const message =
        res.locals.payload.role === 'admin'
          ? 'user already exists'
          : 'Please choose a different username, email, or phone number.'
      return res.send({ msgExists: message })
    } else {
      if (password) {
        const hasedPassword = await bcrypt.hash(
          password,
          parseInt(process.env.SALT_ROUNDS)
        )
        req.body.password = hasedPassword
      }
      req.body.password = userdb.password
      await User.findByIdAndUpdate(userId, req.body)

      return res.status(200).send({ msg: 'user is updated sucessfully' })
    }
  } catch (error) {
    res.status(401).send({ msg: 'something went wrong' })
  }
}
