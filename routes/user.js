const { Router } = require("express");
const userRouter = Router();
const { usermodel } = require("../db.js");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "feohrwi";


userRouter.post("/signup",async function(req,res){

    const { username, password, firstname, lastname } = req.body;
    await usermodel.create({
        username,
        password,
        firstname,
        lastname
    })
    res.json({
        message : "you're signed up"
    })
})
userRouter.post("/signin",function(req,res){

    const { email , password } = req.body;

     const user = usermodel.findOne({
        email : email,
        password : password
     })
     if(user)
     {
        const token = jwt.sign({
            userid : user._id
        },JWT_USER_PASSWORD)

        res.json({
            message : "you're signed in",
            token : token
        })
     }
     else
    res.status(403).json({
        message : "you're signed in"
        
    })
})

module.exports = {
    userRouter : userRouter
} 