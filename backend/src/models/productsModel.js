const pool = require("../db");

const getProducts = async () => {
  try {
    const { rows } = await pool.query("SELECT * FROM products");
    return rows;
  } catch (error) {
    console.log("Error fetching products:", error);
    throw error;
  }
};

module.exports = {
  getProducts,
};
