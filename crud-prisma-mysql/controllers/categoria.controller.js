const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.getAll = async (req, res, next) => {
  try {
    const categorias = await prisma.categoria.findMany();
    res.json(categorias);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { nombre } = req.body;
    const categoria = await prisma.categoria.create({ data: { nombre } });
    res.json(categoria);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const categoria = await prisma.categoria.update({
      where: { id: parseInt(id) },
      data: { nombre },
    });
    res.json(categoria);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.categoria.delete({ where: { id: parseInt(id) } });
    res.json({ eliminado: true });
  } catch (err) {
    next(err);
  }
};
  