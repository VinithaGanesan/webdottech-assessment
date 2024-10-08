const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/product/productController");

const productRouter = require("express").Router();

productRouter.post("/create", createProduct);
productRouter.get("/get", getAllProducts);
productRouter.put("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);

module.exports = productRouter;
