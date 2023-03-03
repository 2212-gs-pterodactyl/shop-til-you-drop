const router = require('express').Router()
const { Cart, CartProduct, User } = require('../db')

// GET api/carts/:id
router.get("/:id", async (req, res, next)=>{
    try {
       const cart = await Cart.findOne({ 
        where: { id: req.params.id },
        include: [CartProduct]
     })
       res.json(cart)
    } catch (error) {
        next(error)
    }
})

module.exports = router