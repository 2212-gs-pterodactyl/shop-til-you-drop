const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
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

module.exports = Cart