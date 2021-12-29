import dotenv from 'dotenv';
dotenv.config();

const getSecret = () => process.env.SECRET;

const rootHandler = (req, res) => {
    console.log(req.query.name);
    res.writeHead(200);
    res.end('No result!');
};

const ordersHandler = (req, res) => {
    if (req.query.token !== getSecret()) {
        res.writeHead(200);
        res.end('Your token is expired!');
    } else {
        console.log('req.query.token: ', req.query.token);
        console.log('req.params.id: ', req.params.id);
        res.writeHead(200);
        res.end('Your data!');
    }
};

export default {
    rootHandler,
    ordersHandler,
};
