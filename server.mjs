import express from 'express';
import path from 'path';
import cors from 'cors';
import mysql from 'mysql2';
import compression from 'compression';
import helmet from 'helmet';

// routes
import bcit from "./app/routes/bcit.mjs";

import dbConfig from "./app/database/db.mjs";
const PORT = process.env.PORT || 3000;

const app = express();

app.use(compression());
app.use(helmet());

/*
app.use(compression());

const pool = mysql.createPool(dbConfig);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'gracie')));
app.use(express.static(path.join(__dirname, 'fathers-day')));

const corsOptions = {
    origin: ['https://ihawp.com', 'https://www.ihawp.com', 'http://localhost:3001', 'http://localhost:3000'],
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

*/
app.use('/bcit', bcit);
/*
app.get('/projects', (req, res) => {
    const query = 'SELECT * FROM accounts ORDER BY id DESC';

    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
});

app.get('/gracie', (req, res) => {
    res.sendFile(path.join(__dirname, 'gracie', 'index.html'));
});

app.get('/fathers-day', (req, res) => {
    res.sendFile(path.join(__dirname, 'fathers-day', 'index.html'));
});

// set up router for BCIT
app.get('/bcit', (req, res) => {
    app.use('/bcit/landing-page', express.static('index.html'));
});
app.use('/bcit/landing-page', express.static('../bcit/landing-page'));
app.use('/bcit/web-dev-1/a1', express.static('../bcit/wd1-a1'));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/
app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});