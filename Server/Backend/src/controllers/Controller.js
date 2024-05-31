import { json } from 'express'
import Product from '~/models/Schema'
exports.handleCreateProfile = async (req, res) => {
  const product = await Product.create(req.body)
  res.status(201).json({
    status: 'Success',
    data: {
      product
    }
  })
}

exports.handleGetAllProfile = async (req, res) => {
  try {
    let queryStr = JSON.stringify(req.query)
    queryStr = queryStr.replace(
      //cu phap /\b(word)\b/:la tu can thay the
      /\b(gt|gte|lt|lte|in|elemMatch|eq)\b/g,
      (match) => `$${match}`
    )
    const queryObj = JSON.parse(queryStr)
    const products = await Product.find(queryObj)
    res.status(200).json({
      status: 'Success',
      lengthProduct: products.length,
      data: {
        products
      }
    })
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: error.message
    })
  }
}
exports.handleGetProfile = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json({
      status: 'Success',
      data: {
        product
      }
    })
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: error.message
    })
  }
}
exports.handlePatchProfile = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(201).json({
      status:'Success',
      data: {
        product
      }
    })
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: error.message
    })
  }
}
exports.handleDeleteProfile = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'Success',
      data: {
        product
      }
    })
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      massage: error.message
    })
  }
}
