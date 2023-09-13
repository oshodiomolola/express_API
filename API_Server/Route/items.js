const express = require('express');
const controller = require('./controller');
const globalMiddleware = require('../globalmiddleware')

const itemsRouter = express.Router();


itemsRouter.get("/", globalMiddleware.checkApiKey, controller.getAllItems);
itemsRouter.get("/:id", globalMiddleware.checkApiKey, controller.getOneItem);
itemsRouter.post("/", globalMiddleware.checkApiKey, globalMiddleware.checkRole, controller.createItem);
itemsRouter.patch("/:id", globalMiddleware.checkApiKey, globalMiddleware.checkRole, controller.updateItems);
itemsRouter.delete("/:id", globalMiddleware.checkApiKey, globalMiddleware.checkRole, controller.deleteItem);

module.exports = itemsRouter
