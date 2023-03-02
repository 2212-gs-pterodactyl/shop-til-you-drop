const router = require('express').Router()
const { Order, OrderProduct, User } = require('../db')

//GET api/orders/
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({ include: User })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

//GET api/orders/:id
router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id)
    res.json(order)
  } catch (err) {
    next(err)
  }
})

module.exports = router
