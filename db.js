const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
const Objectid = mongoose.Types.ObjectId;



const userSchema = new Schema({
     email : {type : String, unique : true},
     password : String,
     firstname : String,
     lastname : String
});
const adminSchema = new Schema({
      email : {type : String, unique : true},
      password : String,
      firstname : String,
      lastname : String
});
const courseSchema = new Schema({
 title : String,
 description : String,
 price : String,
 imageUrl : String,
 creatorId : Objectid

})
const purchaseSchema = new Schema({
    userId : String,
    courseId : Objectid
})

const usermodel = mongoose.model("users",userSchema);
const adminmodel = mongoose.model("admin",adminSchema);
const coursemodel = mongoose.model("courses",courseSchema);
const purchasemodel = mongoose.model("purchases",purchaseSchema);

module.exports = {
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}
