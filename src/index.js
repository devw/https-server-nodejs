import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';
import { handler } from './handler.js';

dotenv.config();
const { PORT, KEY, CERT, CA } = process.env;

var options = {
    key: fs.readFileSync(KEY),
    cert: fs.readFileSync(CERT),
    ca: fs.readFileSync(CA),
};
var server = https.createServer(options, handler);
server.listen(PORT, () => console.log(`server listing on ${PORT}`));
