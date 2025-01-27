import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';

import bcit from "./app/bcit/routes.js";
import gracie from "./app/gracie/routes.js";
import fathersDayRouter from "./app/fathers-day/routes.js"

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// https://stackoverflow.com/questions/8817423/why-is-dirname-not-defined-in-node-repl
// https://stackoverflow.com/questions/9765215/global-variable-in-app-js-accessible-in-routes
const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
import dbConfig from "./app/db.js";
const PORT = process.env.PORT || 3001;

const app = express();

app.locals.dirname = __dirname;

app.use(compression());
app.use(helmet());
app.use('/fathers-day', fathersDayRouter);
app.use('/gracie', gracie);
app.use('/bcit', bcit);


app.use(['/', '*'], express.static('./app/ihawp/public'));
app.get(['/', '*'], (req, res) => {
    res.sendFile('./app/ihawp/public/index.html', { root: req.app.locals.dirname })
});

/*

const pool = mysql.createPool(dbConfig);

const corsOptions = {
    origin: ['https://ihawp.com', 'https://www.ihawp.com', 'http://localhost:3001', 'http://localhost:3000'],
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

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

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'gracie')));
app.use(express.static(path.join(__dirname, 'fathers-day')));

app.get('/gracie', (req, res) => {
    res.sendFile(path.join(__dirname, 'gracie', 'index.html'));
});

app.get('/fathers-day', (req, res) => {
    res.sendFile(path.join(__dirname, 'fathers-day', 'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/
app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});