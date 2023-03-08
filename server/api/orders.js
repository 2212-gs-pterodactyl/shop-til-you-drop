const router = require("express").Router();
const { Order, OrderProduct, User, Product } = require("../db");

//GET api/orders/
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        state: "completed",
      },
      include: [User],
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

//POST api/orders/
router.post("/", async (req, res, next) => {
  try {
    const { shippingInfo, paymentInfo, totalPrice } = req.body;
    const order = await Order.create({
      shippingInfo,
      paymentInfo,
      totalPrice,
      state: "completed",
    });
    res.json(order);
  } catch (error) {
    next(error);
  }
});

//PUT api/orders/:id
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const { shippingInfo, paymentInfo, totalPrice } = req.body;
    const order = await Order.findByPk(id);
    res.send(
      await order.update({
        shippingInfo,
        paymentInfo,
        totalPrice,
        state: "completed",
      })
    );
  } catch (error) {
    next(error);
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

    if (!cart) {
      await Order.create({
        userId: req.params.id,
        state: "cart",
      });
    }

    const cartProducts = await OrderProduct.findAll({
      where: {
        orderId: cart.id,
      },
      include: [Product],
    });

    res.json(cartProducts);
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
      await Order.create({
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

    const product = await OrderProduct.findOne({
      where: {
        id: newCart.id,
      },
      include: [Product],
    });

    res.json(product);
  } catch (error) {
    next(error);
  }
});
//DELETE api/orders/cart/:id
router.delete("/cart/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const orderToRemove = await OrderProduct.findByPk(id);
    await orderToRemove.destroy();
    res.send(orderToRemove);
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
