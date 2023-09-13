const express = require('express');
const itemsRoute = require('./Route/items');
const bodyParser = require('body-parser');
const usersRoute = require('./User/user');
const PORT = 3010;

const server = express();

server.use(bodyParser.json());
server.use("/items", itemsRoute);
server.use("/users", usersRoute)


server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})