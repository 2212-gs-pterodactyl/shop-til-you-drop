//this is the access point for all things database related!
const db = require("./db");
const User = require("./models/User");
const Product = require("./models/Product");
const Order = require("./models/Order");
const OrderProduct = require("./models/Order-Product");
const Cart = require("./models/Cart");
const CartProduct = require("./models/Cart-Product");

// Associations shall go here.

User.hasMany(Order);
Order.belongsTo(User);

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.hasMany(CartProduct)
CartProduct.belongsTo(Cart)

Order.hasMany(OrderProduct);
OrderProduct.belongsTo(Order);

Product.hasMany(OrderProduct);
OrderProduct.belongsTo(Product);



module.exports = {
  db,
  User,
  Product,
  Order,
  OrderProduct,
  Cart,
  CartProduct
};
