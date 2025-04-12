import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormularioProducto from './Components/FormularioProductos'

function App() {
  return (
    <div>
      <h1>Panel de Administración</h1>
      <FormularioProducto />
    </div>
  );
}

export default App
