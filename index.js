const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { userRouter  } = require("./routes/user");
const { courseRouter } = require("./routes/course");

app.use("./user",userRouter);
app.use("./course",courseRouter);



async function main()
{
    await mongoose.connect("mongodb+srv://parvati:bqzW04YnHH4RgDbm@cluster0.h3y0kg4.mongodb.net/cousera-database");
    app.listen(3000);
    console.log("listening to port 3000");
}