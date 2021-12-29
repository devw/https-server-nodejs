import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const { ACCESS_TOKEN_SECRET } = process.env;

export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);
    const verifyCallback = (err) => (err ? res.sendStatus(403) : next());
    jwt.verify(token, ACCESS_TOKEN_SECRET, verifyCallback);
};

export const authenticateUser = (req, res) => {
    const name = req.body.username;
    const accessToken = jwt.sign({ name }, ACCESS_TOKEN_SECRET, { expiresIn: 60 });
    res.json({ accessToken });
};
