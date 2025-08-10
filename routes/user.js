const { Router } = require("express");
const userRouter = Router();

userRouter.post("./user/signup")
userRouter.post("./user/signin")

module.exports({
    userRouter : userRouter
})