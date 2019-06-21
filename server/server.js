const express = require('express');
const next = require('next');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const api = require('./api');
const utils = require('./utils');

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => app.render(req, res, '/home', req.query));

  server.get('/items', async (req, res) => {
    const { search = '' } = req.query;
    const products = await api.getSearch(search);
    const data = await utils.parseSearch(products);

    app.render(req, res, '/searchResult', { ...req.query, data });
  });

  server.get('/items/:id', (req, res) => app.render(req, res, '/product', req.query));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
