const express = require('express');
const cors = require('cors');
const app = express();

const router = express.Router();
router.post('/login', (req, res) => {
    res.json({ message: 'Login endpoint working!' });
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Or your Netlify URL
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});

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