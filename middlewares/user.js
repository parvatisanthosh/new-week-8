const jwt = require("jsonwebtoken");
const { JWt_USER_PASSWORD } = require("../config.js");


function auth(req, res,next){
    const token = req.header.token;
    const decoded = jwt.verify(token,JWt_USER_PASSWORD);
    if(decoded)
    {
        req.userid = decoded.id ;

    }
    else{
        res.json({
            message : "there is no entry for this user in our database"
        })
    }
}

