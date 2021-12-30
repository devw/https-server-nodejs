import https from 'https';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import handler from './handler.js';
import { authenticateUser, authenticateToken } from './auth.js';
import dotenv from 'dotenv';
dotenv.config();

const { PORT, KEY, CERT, CA } = process.env;
const app = express();
const getOptions = () => ({
    key: fs.readFileSync(KEY),
    cert: fs.readFileSync(CERT),
    ca: fs.readFileSync(CA),
});
const server = https.createServer(getOptions(), app);

app.use(express.json());
app.use(cors());
app.get('/', handler.homeHandler);
app.post('/login', authenticateUser);
app.get('/order/:id', handler.ordersHandler);
app.get('/orders/:id', authenticateToken, handler.ordersHandler);

server.listen(PORT, () => console.log(`server listing on ${PORT}`));
