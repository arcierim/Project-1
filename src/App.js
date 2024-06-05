const express = require('express');
const userRoutes = require('./Routes/userRoutes');
const bookRoutes = require('./Routes/bookRoutes');
const orderRoutes = require('./Routes/orderRoutes');

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
