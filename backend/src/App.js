const express = require("express");
const pool = require("./db");
const productsRoutes = require("./routes/productsRoutes");

const app = express();

// Your Express app setup and routes go here

app.use("/tableData", productsRoutes);

module.exports = app;
