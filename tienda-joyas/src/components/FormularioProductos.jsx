import { useState } from "react";

function FormularioProducto() {
    const [producto, setProducto] = useState({
      nombre: "",
      descripcion: "",
      precio: "",
      stock: "",
      categoria: "",
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
        formData.append("imagen", imagen);
      }
  
      fetch("http://localhost:3001/productos", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Producto añadido");
          setProducto({
            nombre: "",
            descripcion: "",
            precio: "",
            stock: "",
            categoria: "",
          });
          setImagen(null);
        })
        .catch((err) => console.error("Error:", err));
    };
  
    return (
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="nombre" onChange={handleChange} value={producto.name} placeholder="Nombre" required />
        <textarea name="descripcion" onChange={handleChange} value={producto.description} placeholder="Descripción" required />
        <input type="number" name="precio" onChange={handleChange} value={producto.price} placeholder="Precio" required />
        <input type="number" name="stock" onChange={handleChange} value={producto.stock} placeholder="Stock" required />
        <input type="text" name="categoria" onChange={handleChange} value={producto.category} placeholder="Categoría" required />
        <input type="file" name="imagen" onChange={handleImageChange} accept="imagen/*" required />
  
        <button type="submit">Guardar producto</button>
      </form>
    );
  }

  export default FormularioProducto;