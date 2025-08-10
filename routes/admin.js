const { adminRouter } = require("express");
const { adminModel } = require("../db.js");

const adminRouter = adminRouter();

adminRouter.post("signup",function(req,res){
    res.json({
        message : "you're signed up"
    })
})
adminRouter.post("/signin",function(req,res){
    res.json({
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
