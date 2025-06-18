require('dotenv').config()
const express = require('express')
const app = express() 
//middlewares
const errorHandler = require('./middlewares/errorHandler')
//rutas
const articuloRoutes = require('./routes/articulo.routes')
const categoriaRoutes = require('./routes/categoria.routes')

const PORT = process.env.PORT

app.use(express.json())

//rutas
app.use('/api/articulos', articuloRoutes)
app.use('/api/categorias', categoriaRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log("Listen on port", PORT)
})

