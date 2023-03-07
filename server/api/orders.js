const router = require("express").Router();
const { Order, OrderProduct, User } = require("../db");

//GET api/orders/
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll({ include: User });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

//GET api/orders/cart/:id
router.get("/cart/:id", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.id,
        state: "cart",
      },
      include: [OrderProduct],
    });
    res.json(cart);
  } catch (error) {
    next(error);
  }
});

//POST api/orders/cart/:id
router.post("/cart/:id", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.id,
        state: "cart",
      },
      include: [OrderProduct],
    });

    if (!cart) {
      Order.create({
        userId: req.params.id,
        state: "cart",
      });
    }

    const { id } = await Order.findOne({
      where: {
        userId: req.params.id,
        state: "cart",
      },
      include: [OrderProduct],
    });

    const orderId = id;
    const { qty, price, productId } = req.body;

    const newCart = await OrderProduct.create({
      orderId,
      qty,
      price,
      productId,
    });

    res.json(newCart);
  } catch (error) {
    next(error);
  }
});

//GET api/orders/completed/:id
router.get("/completed/:id", async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        userId: req.params.id,
        state: "completed",
      },
      include: [OrderProduct],
    });
    res.json(cart);
  } catch (error) {
    next(error);
  }
});

router.get("/completed/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = router;
