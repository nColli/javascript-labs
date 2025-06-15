import express, {Request, Response} from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()

const PORT = process.env.PORT

interface Usuario {
    dni: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
}

const ejemploUsuario = {
    dni: "11.443.233",
    nombre: "Juan",
    apellido: "Perez",
    fechaNacimiento: new Date("2000-5-3")
}

export function getNombreEjemploUsuario() {
    return ejemploUsuario.nombre
}

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Prueba typescript")
})

app.get('/user', (req: Request, res: Response) => {
    res.status(200).send(ejemploUsuario)
})

app.patch('/user', (req: Request, res: Response) => {
    console.log("Req.body", req.body)
    const nuevaFechaNacimiento = req.body.fechaNacimiento
    console.log("nueva fecha nac", nuevaFechaNacimiento)
    const newFechaNacimiento = new Date(nuevaFechaNacimiento)
    console.log("date nac", newFechaNacimiento)
    ejemploUsuario.fechaNacimiento = newFechaNacimiento

    res.status(200).send(ejemploUsuario)
})

app.listen(PORT, () => {
    console.log("Server running on PORT", PORT)
}).on("error", (err) => {
    console.log(err.message)
})

