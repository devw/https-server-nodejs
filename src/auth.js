import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const { ACCESS_TOKEN_SECRET } = process.env;

export const authenticateUser = (req, res) => {
    const username = req.body;
    res.json({ accessToken: jwt.sign(username, ACCESS_TOKEN_SECRET) });
};
