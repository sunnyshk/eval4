const express = require("express");

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controllers");
const loginController = require("./controllers/login.controllers");
const todoController = require("./controllers/todo.controllers");

app.use("/register", userController);
app.use("/login", loginController);
app.use("/todos", todoController);

module.exports = app;
