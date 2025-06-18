const { PrimsaClient } = require('@prisma/client')

const prisma = new PrimsaClient()

exports.getAll = async (req, res, next) => {
    try {
        const articulos = await prisma.articulo.findMany({ include: { categoria: true } })
        res.json(articulos)
    } catch (err) {
        next(err)
    }
}

exports.create = async (req, res, next) => {
    try {
        const { titulo, contenido, categoriaId } = req.body
        const articulo = await prisma.articulo.create({
            data: { titulo, contenido, categoriaId },
        })
        res.json(articulo)
    } catch (err) {
        next(err)
    }
}

exports.update = async (req, res, next) => {
    try {
        const { id } = req.params
        const { titulo, contenido, categoriaId } = req.body
        const articulo = await prisma.articulo.update({
            where: { id },
            data: { titulo, contenido, categoriaId },
        })
        res.json(articulo)
    } catch (err) {
        next(err)
    }
}

exports.remove = async (req, res, next) => {
    try {
        const { id } = req.params
        await prisma.articulo.delete({ where: { id: parseInt(id) } })
        res.json({ eliminado: true })
    } catch (err) {
        next(err)
    }
}