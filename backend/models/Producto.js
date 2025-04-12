const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  imagen: String,
  stock: Number,
  categoria: String,
});

module.exports = mongoose.model("Producto", productSchema);
