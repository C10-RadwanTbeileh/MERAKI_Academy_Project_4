const express = require("express");
const { createNewRole } = require("../controllers/role");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const roleRouter = express.Router();

roleRouter.post("/", authentication, authorization(""), createNewRole);

module.exports = roleRouter;
