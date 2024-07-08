// productsController.js

const productsModel = require('../models/productsModel');

const getProducts = async (req, res) => {
  try {
    const products = await productsModel.getProducts();
    res.json(products);
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getProducts,
};
