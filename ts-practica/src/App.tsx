import { useState } from 'react'
import './App.css'

//interfaz - define la forma de un objeto - que prop. y tipos deben tener
interface Usuario {
  dni: number;
  nombre: string;
  apellido: string;
}

//Generics: permite escribir funciones y clases que funcionan con cualq tipo
function identidad<T>(valor: T) {
  return valor
}

//tipos en funciones
function mostrarUsuario(usuario: Usuario): void {
  const {dni, nombre, apellido} = usuario
  console.log("DNI", dni, "nombre", nombre, "apellido", apellido)
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

  const num = identidad<number>(100)
  const text = identidad<string>("Hola mundo") 

  console.log("num", num, "text", text)

  //no es valido:
  //let textoModif = identidad<string>("Hola mundo") 
  //textoModif = 100

  mostrarUsuario(newUser)

  //tipos avanzados
  //union - valor puede ser de mas de un tipo
  let resultado: string | number
  resultado = "diez"
  resultado = 10
  console.log("Resultado", resultado)
  
  //aliases - nombres personalizados para tipos
  type ID = number | string
  let userId: ID = "11.321.314"
  userId = 10000

  console.log("UserId", userId)

  //tipo opcional - prop no es obligatoria
  interface Config {
    color?: string;
    size: number;
  }

  const config1: Config = {
    color: "#112233",
    size: 100
  }

  console.log("Config 1", config1)

  const config2: Config = {
    size: 100
  }

  console.log("Config 2", config2)


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
