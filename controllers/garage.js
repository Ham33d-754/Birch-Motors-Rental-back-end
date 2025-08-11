const Garage = require('../models/garage')

exports.garage_get_all = async (req, res) => {
  try {
    const garages = await Garage.find()
    return res.status(200).send({ msg: 'Created Successfly', garages })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'sometinhg went wrong' })
  }
}

exports.garage_get_by_id = async (req, res) => {
  try {
    const garage = await Garage.findById(req.params.id).populate('cars')
    return res.status(200).send({ msg: 'Created Successfly', garage })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'sometinhg went wrong' })
  }
}

exports.garage_create_post = async (req, res) => {
  try {
    const garage = await Garage.create(req.body)
    return res.status(200).send({ msg: 'Created Successfly' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'sometinhg went wrong' })
  }
}

exports.garage_update_put = async (req, res) => {
  try {
    const updated = await Garage.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.status(200).send({ msg: 'Created Successfly' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'sometinhg went wrong' })
  }
}

exports.garage_delete = async (req, res) => {
  try {
    const deleted = await Garage.findByIdAndDelete(req.params.id)
    return res.status(200).send({ msg: 'Created Successfly' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'sometinhg went wrong' })
  }
}
