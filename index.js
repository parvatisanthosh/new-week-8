require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const { userRouter  } = require("./routes/user");
const { courseRouter } = require("./routes/course");
app.use(express.json())
app.use("/user",userRouter);
app.use("/course",courseRouter);




async function main()
{
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
    console.log("listening to port 3000");

}
main();