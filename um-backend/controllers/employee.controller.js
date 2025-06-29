const { PrismaClient } = require("../generated/prisma/client");

const prisma = new PrismaClient();

exports.getAll = async (req, res, next) => {
    try {
        const employees = await prisma.employee.findMany();
        res.json(employees);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        const { name, location, designation } = req.body;
        const employee = await prisma.employee.create({
            data: { name, location, designation },
        });
        res.json(employee);
    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, location, designation } = req.body;
        const employee = await prisma.employee.update({
            where: { id: parseInt(id) },
            data: { name, location, designation },
        });
        res.json(employee);
    } catch (error) {
        next(error);
    }
};

exports.remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        await prisma.employee.delete({ where: { id: parseInt(id) } });
        res.json({ eliminado: true });
    } catch (error) {
        next(error);
    }
};