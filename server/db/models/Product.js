const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  description: {
    type: Sequelize.TEXT("long"),
  },

  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },

  size: {
    type: Sequelize.STRING,
    validate: {
      isIn: [["S", "M", "L"]],
    },
  },

  img_URL: {
    type: Sequelize.STRING,
    defaultValue:
      "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_zz-plant_slate-e1644417817545.jpg?ver=279477",
    allowNull: false,
  },

  type: {
    type: Sequelize.ENUM("indoor", "outdoor"),
  },

  inCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Product;
