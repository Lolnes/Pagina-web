const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.get("/", async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, categoria } = req.body;
    const imagen = req.file ? req.file.filename : "";

    const nuevoProducto = new Producto({
      nombre,
      descripcion,
      precio,
      stock,
      categoria,
      imagen
    });

    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
