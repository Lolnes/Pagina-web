import { useState } from "react";

function FormularioProducto() {
    const [producto, setProducto] = useState({
      name: "",
      description: "",
      price: "",
      stock: "",
      category: "",
    });
  
    const [imagen, setImagen] = useState(null);
  
    const handleChange = (e) => {
      setProducto({ ...producto, [e.target.name]: e.target.value });
    };
  
    const handleImageChange = (e) => {
      setImagen(e.target.files[0]);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      Object.keys(producto).forEach((key) => {
        formData.append(key, producto[key]);
      });
      if (imagen) {
        formData.append("image", imagen);
      }
  
      fetch("http://localhost:3001/productos", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Producto añadido");
          setProducto({
            name: "",
            description: "",
            price: "",
            stock: "",
            category: "",
          });
          setImagen(null);
        })
        .catch((err) => console.error("Error:", err));
    };
  
    return (
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="name" onChange={handleChange} value={producto.name} placeholder="Nombre" required />
        <textarea name="description" onChange={handleChange} value={producto.description} placeholder="Descripción" required />
        <input type="number" name="price" onChange={handleChange} value={producto.price} placeholder="Precio" required />
        <input type="number" name="stock" onChange={handleChange} value={producto.stock} placeholder="Stock" required />
        <input type="text" name="category" onChange={handleChange} value={producto.category} placeholder="Categoría" required />
        <input type="file" name="image" onChange={handleImageChange} accept="image/*" required />
  
        <button type="submit">Guardar producto</button>
      </form>
    );
  }
  