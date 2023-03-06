const router = require('express').Router()
const { Cart, CartProduct, User } = require('../db')

// GET api/carts/:id
router.get('/:id', async (req, res, next) => {
  try {
    const cart = await Cart.findOne({
      where: { id: req.params.id },
      include: [CartProduct],
    })
    res.json(cart)
  } catch (error) {
    next(error)
  }
})

// POST api/carts/:id
router.post('/:id', async (req, res, next) => {
  try {
    console.log('inside cart route backend', req.body)
    res.status(201).send(await CartProduct.create(req.body))
  } catch (error) {
    next(error)
  }
})

// PUT api/carts/:id
router.put('/:id', async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id)
    res.send(await cart.update(req.body))
  } catch (error) {
    next(error)
  }
})

// DELETE api/carts/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params.id)
    await cart.destroy()
    res.send(cart)
  } catch (error) {
    next(error)
  }
})
module.exports = router
