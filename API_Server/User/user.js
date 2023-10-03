const express = require('express');
const middleware = require('./middleware');
const controller = require('./controller');
const bodyParser = require('body-parser');

const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.post("/", middleware.checkBody, controller.createUser);

module.exports = userRouter