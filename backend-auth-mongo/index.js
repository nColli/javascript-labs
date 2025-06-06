const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const authRouter =  require('./authRouter');
const tokenValidation = require('./auth').tokenValidation;
const errorHandler = require('./errorHandler');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);
mongoose.set('sanitizeFilter');

mongoose
  .connect(MONGODB_URI)
  .then((response) => {
    console.log('Connected to MongoDB', MONGODB_URI);
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

app.use(morgan('tiny'));
app.use(express.json());

app.use('/api/auth', authRouter);

app.get('/', tokenValidation, (req, res) => {
  res.send(`Date: ${new Date()}`);
});

app.post('/', tokenValidation, (req, res) => {
  console.log('req.body', req.body)
  res.json({ message: 'OK' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});