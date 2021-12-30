import path from 'path';

const homeHandler = (req, res) => {
    console.log(req.query.name);
    res.sendFile(`${path.resolve()}/src/html/home.html`);
};

const ordersHandler = (_, res) => {
    res.end('Your data!');
};

export default {
    homeHandler,
    ordersHandler,
};
