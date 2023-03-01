const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  state: Sequelize.ENUM('cart', 'completed'),
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  shippingInfo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  paymentInfo: {
    type: Sequelize.INTEGER,
  },
})

module.exports = Order
