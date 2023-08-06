import CartManager from "../../../dao/remote/managers/cart/cartManager.js";
import { Router } from "express";
const cartManager = new CartManager();

const router = Router();

router.get("/:id", async (req, res) => {
  const id = "64c58db4b6c6807fefe241c1";
  const cart = await cartManager.getCartById(id);
  res.render("cart", cart);
});

export default router;
