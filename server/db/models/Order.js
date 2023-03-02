const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  state: Sequelize.ENUM("cart", "completed"),
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
});

module.exports = Order;
