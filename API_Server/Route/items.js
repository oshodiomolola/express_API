const express = require('express');
const controller = require('./controller')

const itemsRouter = express.Router();

itemsRouter.get("/", controller.getAllItems);
itemsRouter.get("/:id", controller.getOneItem);
itemsRouter.post("/", controller.createItem);
itemsRouter.patch("/:id", controller.updateItems);
itemsRouter.delete("/:id", controller.deleteItem)

module.exports = itemsRouter
