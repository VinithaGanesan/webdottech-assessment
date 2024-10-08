const productModel = require("../../models/productModel");

//create new product
const createProduct = async (req, res, next) => {
  try {
    const { name, price, description, category, brand, totalQuantity } =
      req.body;

    if (
      !name ||
      !price ||
      !description ||
      !category ||
      !brand ||
      !totalQuantity
    ) {
      return res.status(404).json({
        success: false,
        message: "Invalid data provided!",
      });
    }

    const newProduct = new productModel({
      name,
      price,
      description,
      category,
      brand,
      totalQuantity,
    });

    await newProduct.save();

    return res.status(200).json({
      success: true,
      message: "New product created successfully",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal error",
    });
  }
};

//get all products
const getAllProducts = async (req, res, next) => {
  try {
    const listOfProducts = await productModel.find({});

    return res.status(200).json({
      success: true,
      message: "All Products fetched successfully",
      data: listOfProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal error",
    });
  }
};

//update a product
const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, description, category, brand, totalQuantity } =
      req.body;

    let findProduct = await productModel.findById(id);
    if (!findProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    let updatedProduct = await productModel.findByIdAndUpdate(
      { _id: id },
      {
        name: name,
        price: price,
        description: description,
        category: category,
        brand: brand,
        totalQuantity: totalQuantity,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal error",
    });
  }
};

//delete a product
const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal error",
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
