import { Router } from "express";
import ProductManager from "../../../dao/remote/managers/product/productManager.js"; 

const productManager = new ProductManager();
const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await productManager.getProducts();
    res.render("realTimeProducts", { products });
  } catch (error) {
    res.status(500).send("Error fetching products.");
  }
});

export default router;
