const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db.js");

userRouter.post("/signup",function(req,res){
    res.json({
        message : "you're signed up"
    })
})
userRouter.post("/signin",function(req,res){
    res.json({
        message : "you're signed in"
    })
})

module.exports = {
    userRouter : userRouter
} 