const express = require('express');
const router = express.Router();
const db = require('../db');
// GET todos los items
router.get('/', async (req, res) => {
    try {
        const rows = await db.query('SELECT * FROM items');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// GET item por id
router.get('/:id', async (req, res) => {
    try {
        const rows = await db.query('SELECT * FROM items WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Item no encontrado' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST nuevo item
router.post('/', async (req, res) => {
    try {
        const { nombre } = req.body;
        const result = await db.query('INSERT INTO items (nombre) VALUES (?)', [nombre]);
        res.status(201).json({ id: result.insertId, nombre });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT actualizar item
router.put('/:id', async (req, res) => {
    try {
        const { nombre } = req.body;
        await db.query('UPDATE items SET nombre = ? WHERE id = ?', [nombre, req.params.id]);
        res.json({ id: req.params.id, nombre });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE eliminar item
router.delete('/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM items WHERE id = ?', [req.params.id]);
        res.json({ mensaje: 'Item eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;