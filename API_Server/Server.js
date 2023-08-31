const express = require('express');
const itemsRoute = require('./Route/items');
const bodyParser = require('body-parser');

const PORT = 3010;

const server = express();

server.use(bodyParser.json());
server.use("/items", itemsRoute);


server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})