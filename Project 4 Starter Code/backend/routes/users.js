const express = require("express");
const { register, login,userById ,upDatWishByUserId,upDateDeleteWishList} = require("../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get("/userById/:id", userById);
usersRouter.put("/wishByUserId/:id", upDatWishByUserId);
usersRouter.put("/upDateDeleteWish/:id", upDateDeleteWishList);

module.exports = usersRouter;
