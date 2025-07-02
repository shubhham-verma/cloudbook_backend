const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors()); // Handle preflight requests for all routes

app.use(express.json());
app.use('/', require('../routes/notes'));

module.exports = app;
module.exports.handler = (req, res) => app(req, res);