const express = require('express');
const middleware = require('./middleware');
const controller = require('./controller')

const userRouter = express.Router();

userRouter.post("/", middleware.checkBody, controller.createUser)

module.exports = userRouter