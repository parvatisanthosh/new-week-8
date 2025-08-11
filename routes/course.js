const { Router } = require("express");
const courseRouter = Router();
const { courseModel } = require("../db.js");

courseRouter.post("/purchase",function(req,res){
    res.json({
        message : "this is the purchase page"
    })
})
courseRouter.post("/preview",async function(req,res){
    const { title, description, price, imageurl, creatorId } = req.body;
    const courses = await courseModel.create({
        title, description, price, imageurl, creatorId
        
    })
    res.json({
        message : "course created",
        courseId : courses._id
    })
})

module.exports ={
    courseRouter : courseRouter
}