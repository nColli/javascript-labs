import { useState } from 'react'
import './App.css'

//interfaz - define la forma de un objeto - que prop. y tipos deben tener
interface Usuario {
  dni: number;
  nombre: string;
  apellido: string;
}

function App() {
  const [contador, setContador] = useState<number>(0)

  //tipos basicos de typescript
  const texto: string = "Prueba"
  const numeros: number[] = [1, 2, 3, 4]
  const tupla: [string, number] = ["Nivel", 10]
  //tipo flexible
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let desconocido: any = "Prueba any"

  console.log("Tupla", tupla[0], tupla[1])
  console.log("Desconocido", desconocido)
  desconocido = 5
  console.log("Desconocido", desconocido)

  const newUser: Usuario = {
    dni: 30000000,
    nombre: "Juan",
    apellido: "Perez"
  }

  return (
    <>
      <div>texto: {texto}</div>
      {numeros.map((num) => <p key={num}>{String(num)}</p>)}
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <h2>Nuevo usuario:</h2>
      <p>DNI: {newUser.dni}</p>
      <p>nombre: {newUser.nombre}</p>
      <p>apellido: {newUser.apellido}</p>
    </>
  )
}

export default App
