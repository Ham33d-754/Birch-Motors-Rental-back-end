const jwt = require('jsonwebtoken')
require('dotenv').config()
exports.verfiyToken = (req, res, next) => {
  const token = req.headers['authorization'].split(' ')[1]
  if (token) {
    res.locals.token = token
    const payload = jwt.verify(token, process.env.APP_SECRET)
    if (payload) {
      res.locals.payload = payload
      return next()
    }
  }
  res.status(401).send({ msg: 'unauthorized' })
}
