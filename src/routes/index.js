import productsController from "../controllers/local/product/controller.products.js";
import cartsController from "../controllers/local/cart/controller.carts.js";
import viewsControllerAsinc from "../controllers/views/product/controller.viewsAsinc.js";
import viewsControllerSinc from "../controllers/views/product/controller.viewsSinc.js"
import productsRemoteController from "../controllers/remote/product/controller.products.js";
import cartsRemoteController from "../controllers/remote/cart/controller.carts.js";
import chatController from "../controllers/views/chat/controller.chats.js";
import viewsControllerCart from "../controllers/views/cart/controller.views.js"
import sessionRemoteController from "../controllers/remote/session/controller.session.js"
import viewsControllerList from "../controllers/views/product/controller.viewsList.js"

const router = (app) => {

  app.use("/api/remote/products", productsRemoteController);
  app.use("/api/remote/carts", cartsRemoteController);
  app.use("/api/local/products", productsController);
  app.use("/api/local/carts", cartsController);
  app.use("/api/session", sessionRemoteController);

  app.use("/chat", chatController)
  app.use("/", viewsControllerAsinc);

  app.use("/cart", viewsControllerCart);
  app.use("/productsList", viewsControllerList);
  app.use("/realTimeProducts", viewsControllerSinc);


};

export default router;