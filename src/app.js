require('dotenv').config();

const productRoutes = require('../src/routes/productRoutes')

const express = require('express');
const cors = require('cors'); 


const app = express();

app.set('trust_proxy', true);

app.use(cors({
    origin: 'http://localhost:4000',
    credentials: true             
}));

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/product/', productRoutes);

module.exports = app;