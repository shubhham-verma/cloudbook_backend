const connectToMongo = require('../db');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

connectToMongo();
const app = express();

// Enable CORS for all origins (adjust as needed for security)
app.use(cors({
    origin: '*', // Or specify your frontend URL for more security
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Available routes
app.use('/api/auth', require('../routes/auth'));
app.use('/api/notes', require('../routes/notes'));

// Export the handler for Vercel
module.exports = app;
module.exports.handler = (req, res) => app(req, res);