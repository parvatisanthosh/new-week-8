const { adminRouter } = require("express");
const { adminModel } = require("../db.js");

const adminRouter = adminRouter();

adminRouter.post("/signup",async function(req,res){

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
adminRouter.post("/signin",function(req,res){

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

adminRouter.post("/courses", function(req,res){
    res.json({
        message : "These are the courses"
    })
})

adminRouter.get("/courses",function(req,res){
    res.json({
        message : "these are the available courses"
    })
})

adminRouter.put("/courses",function(req,res){
    res.json({
        message : "here you can put the new courses"
    })
})

module.exports ={
    adminRouter : adminRouter
}
