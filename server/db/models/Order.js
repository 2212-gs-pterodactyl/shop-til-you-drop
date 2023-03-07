const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  state: {
    type: Sequelize.ENUM("cart", "completed"),
    defaultValue: "cart",
  },

  totalPrice: {
    type: Sequelize.INTEGER,
  },
  shippingInfo: {
    type: Sequelize.STRING,
  },
  paymentInfo: {
    type: Sequelize.STRING,
  },
});

module.exports = Order;
