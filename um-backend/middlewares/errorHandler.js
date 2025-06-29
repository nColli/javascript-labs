module.exports = (error, req, res, next) => {
    console.error('❌ Error:', error);
    res.status(500).json({ error: 'Algo salio mal', detalle: error.message });
};