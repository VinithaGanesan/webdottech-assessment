const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/product/productController");
const TokenShield = require("../middleware/Tokenshield");

const productRouter = require("express").Router();

productRouter.post("/create", TokenShield, createProduct);
productRouter.get("/get", TokenShield, getAllProducts);
productRouter.put("/update/:id", TokenShield, updateProduct);
productRouter.delete("/delete/:id", TokenShield, deleteProduct);

module.exports = productRouter;
