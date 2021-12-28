import https from 'https';
import express from 'express';
import fs from 'fs';
import dotenv from 'dotenv';
import routes from './routes.js';

dotenv.config();

const { PORT, KEY, CERT, CA } = process.env;
const app = express();
const getOptions = () => ({
    key: fs.readFileSync(KEY),
    cert: fs.readFileSync(CERT),
    ca: fs.readFileSync(CA),
});
const server = https.createServer(getOptions(), app);

app.get('/', routes.root);
app.get('/orders/:id', routes.orders);

server.listen(PORT, () => console.log(`server listing on ${PORT}`));
