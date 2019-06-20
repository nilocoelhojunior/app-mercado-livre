const routes = require('next-routes');

module.exports = routes()
  .add('home', '/', 'Home/index.js')
  .add('items', '/items', 'SearchResult')
  .add('items', '/items/:id', 'Product');
