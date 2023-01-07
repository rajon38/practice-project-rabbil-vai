const jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
    let Token = req.headers['token-key'];

    jwt.verify(Token,'ThisIsNotASecretKey',function (err,decoded) {
        if (err){
            res.status(401).json({status:"unauthorized"});
        }else {
            //get username from decoded token & add with req header
            let UserName = decoded['data']['UserName'];
            req.headers.username= UserName
            next();
        }
    })
}
