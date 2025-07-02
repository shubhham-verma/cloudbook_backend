const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*', // Or your Netlify frontend URL for more security
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors()); // This handles preflight requests

app.use(express.json());
app.use('/', require('../routes/auth')); // or notes

module.exports = app;
module.exports.handler = (req, res) => app(req, res);