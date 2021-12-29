const homeHandler = (req, res) => {
    console.log(req.query.name);
    res.writeHead(200);
    res.end('Home!');
};

const ordersHandler = (_, res) => {
    res.end('Your data!');
};

export default {
    homeHandler,
    ordersHandler,
};
