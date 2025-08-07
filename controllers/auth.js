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
          role: user.role
        }
        let token = jwt.sign(payload, process.env.APP_SECRET)
        return res.status(200).send({ admin: payload, token: token })
      }
      res
        .status(401)
        .send({ status: 'Error', msg: 'username/password is wrong' })
    }
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'sometinhg went wrong' })
  }
}
exports.auth_register_post = async (req, res) => {
  try {
    const user = await User.create(req.body)
    if (user) {
      return res.status(200).send({ msg: 'added secusefuly' })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: 'username/password is required' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'sometinhg went wrong' })
  }
}
