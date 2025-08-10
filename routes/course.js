const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("./user/signup")
courseRouter.post("./user/signin")

module.exports({
    courseRouter : courseRouter
})