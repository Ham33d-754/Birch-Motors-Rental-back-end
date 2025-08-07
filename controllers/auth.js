// user control
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.auth_sigin_post = async (req, res) => {
  const user = User.findOne({ username: req.body.username })
  if (user) {
    const verfiy = bcrypt.compare(user.password, req.body.passwoed)
    if (verfiy) {
      let payload = {
        id: user._id,
        role: user.role
      }
      let token = jwt.sign(payload, process.env.APP_SECRET)
      return res.status(200).send({ admin: payload, token: token })
    }
    res.status(401).send({ status: 'Error', msg: 'username/password is wrong' })
  }
}
