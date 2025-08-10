// user control
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.auth_sigin_post = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (user) {
      const verfiy = await bcrypt.compare(req.body.password, user.password)
      if (verfiy) {
        let payload = {
          id: user._id,
          role: user.role,
          name: user.username
        }
        let token = jwt.sign(payload, process.env.APP_SECRET)
        return res.status(200).send({ admin: payload, token: token })
      }
    }
    return res.send({ status: 'Error', msg: 'username/password is wrong' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'sometinhg went wrong' })
  }
}
exports.auth_register_post = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body
    const user = await User.findOne({
      $or: [{ username }, { email }, { phone }]
    })

    if (user) {
      const message =
        'Please choose a different username, email, or phone number.'
      console.log(message)
      return res.send({ msgExists: message })
    } else {
      const hasedPassword = await bcrypt.hash(
        password,
        parseInt(process.env.SALT_ROUNDS)
      )
      req.body.password = hasedPassword
      await User.create(req.body)
      return res.send({ msg: 'thank you for registering' })
    }
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'sometinhg went wrong' })
  }
}
exports.auth_checkSession_get = (req, res) => {
  const { payload } = res.locals
  res.status(200).send(payload)
}
