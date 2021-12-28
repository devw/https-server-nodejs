export const handler = (req, res) => {
    console.log('req, res:', req, res);
    res.writeHead(200);
    res.end('No result!');
};
