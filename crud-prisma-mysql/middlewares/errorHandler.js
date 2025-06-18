module.exports = (err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({ error: 'Algo salió mal', detalle: err.message });
};