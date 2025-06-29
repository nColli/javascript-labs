const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const employeeRoutes = require('./routes/employee.routes');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors());
app.use(morgan('tiny'))
app.use(express.json());

app.use('/api/employee', employeeRoutes);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server running on port 3000');

    setInterval(() => {
        console.log('Server running');
    }, 1000000);
});