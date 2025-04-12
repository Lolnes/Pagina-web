import { useState } from 'react'
import './App.css'
import FormularioProductos from "./components/FormularioProductos";

function App() {
  return (
    <div className="App">
      <h1>Tienda de Joyas</h1>
      <FormularioProductos />
    </div>
  );
}

export default App
