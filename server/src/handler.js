const homeHandler = (req, res) => {
    console.log(req.query.name);
    res.writeHead(200);
    res.end('Home!');
};

const ordersHandler = (_, res) => {
    res.end(JSON.stringify({ stdout: 'my data!' }));
};

export default {
    homeHandler,
    ordersHandler,
};
