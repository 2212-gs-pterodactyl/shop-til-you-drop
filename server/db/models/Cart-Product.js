const Sequelize = require("sequelize");
const db = require("../db");

const CartProduct = db.define("cartProduct", {
  /* NOTE: productId and orderId will be auto-generated by Sequelize,
as a result of our associations.*/

  qty: {
    /* Here, COUNT means "quantity in cart" e.g. how MANY basil plants do you want to buy?*/
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  price: {
    /* PRICE = unit cost e.g. "ONE basil plant costs $8." */
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
});

module.exports = CartProduct;