const { Router } = require("express");
const courseRouter = Router();
const { courseModel } = require("../db.js");

courseRouter.post("/purchase",function(req,res){
    res.json({
        message : "this is the purchase page"
    })
})
courseRouter.post("/preview",function(req,res){
    res.json({
        message : "this is the preview page"
    })
})

module.exports ={
    courseRouter : courseRouter
}