const router = require('express').Router()
const { Product } = require('../db')

module.exports = router

//GET api/products/
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({})
    res.json(products)
  } catch (err) {
    next(err)
  }
})

//GET api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id)
    res.json(singleProduct)
  } catch (err) {
    next(err)
  }
})

//POST api/products
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body))
  } catch (error) {
    next(error)
  }
})

//PUT api/products/:id
router.put('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)
    res.send(await product.update(req.body))
  } catch (error) {
    next(error)
  }
})

// DELETE /api/campuses/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)
    await product.destroy()
    res.send(product)
  } catch (error) {
    next(error)
  }
})

//GET api/products/:size
//TEST ROUTE: for filtering by size
router.get('/:size', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: {
        size: req.params.size,
      },
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})
