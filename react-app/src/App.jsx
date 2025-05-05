import { useState } from 'react'
import './App.css'
import Saludo from './components/Saludo'

function App() {
  const [nombre, setNombre] = useState(null)

  return (
    <div>
      <h1>App</h1>

      <input 
        type="text" 
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribi tu nombre"
      />

      <Saludo nombre={nombre} />
    </div>
  )
}

export default App
