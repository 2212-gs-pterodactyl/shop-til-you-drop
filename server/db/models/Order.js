const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  shippingInfo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paymentInfo: {
    type: Sequelize.STRING,
  },
})

module.exports = Order
