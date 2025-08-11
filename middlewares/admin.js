const jwt = require("jsonwebtoken");
const { JWt_ADMIN_PASSWORD } = require("../config.js");


function auth(req, res,next){
    const token = req.header.token;
    const decoded = jwt.verify(token,JWt_ADMIN_PASSWORD);
    if(decoded)
    {
        req.adminid = decoded.id ;

    }
    else{
        res.json({
            message : "there is no entry for this adminS in our database"
        })
    }
}

