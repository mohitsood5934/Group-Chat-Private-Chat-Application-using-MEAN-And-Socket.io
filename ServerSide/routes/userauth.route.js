var express = require("express");
var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
var jwt_decode = require('jwt-decode');
var router = express.Router();
var User = require("../models/userauth.model");



router.get('/protectedRoute',verifyToken,function(req,res){
    var decoded = jwt_decode(req.token);
    console.log(decoded);
    jwt.verify(req.token,'secret',(err,user)=>{
    
    if (err) throw err;
    
    else
 
        res.json({
            message: 'Post created',
            user,
            decoded
          
          });
    });
});
//route for User signup
router.post('/signup',function(req,res){
    console.log("Inside route")
    var _id= new  mongoose.Types.ObjectId();
    var name = req.body.name;
    var nickName=req.body.nickName;
    var mobNumber= req.body.mobNumber;
    var email = req.body.email;
    var password = req.body.password;

    User.create({
        _id:_id,
        name:name,
        nickName:nickName,
        mobNumber:mobNumber,
        email:email,
        password:bcrypt.hashSync(password,bcrypt.genSaltSync(10))


    },function(err,user){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }
        else{
            console.log("User created");
            res.json({"msg":"User created successfully"});
        }
    })
})
router.post("/signin",function(req,res){
    User.findOne({email:req.body.email})
    .exec()
    .then(function(user){
        bcrypt.compare(req.body.password,user.password,function(err,user){

            if(err){
                return res.status(401).json({
                    failed: 'Unauthorized Access'
                    
                    
                 });
            }

            if(user){
               const JWTtoken = jwt.sign({
                   
                    email: user.email,
                    _id: user._id
                  },
                  'secret',
                   {
                     expiresIn: '2h'
                   });
                  

                 return res.status(200).json({
                    success: 'JWT Successfully generated',
                     token: JWTtoken,
                    user:user
                  });
                
            }
            return res.status(500).json({
                failure:"User not verified!!"

            });

        });
    })
    .catch((err) => console.log(err));
})

//format of token
//Authorization:Bearer<access_token>
//verify token
//It is a middleware function therfore it calls the next to proceed
function verifyToken(req,res,next)
{
	const bearerHeader = req.headers['authorization'];
		if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            //set the token
            req.token=bearerToken;
            //Next middleware
            next();


		}
		else
		{
			//forbidden
			res.sendStatus(403);
		}

}
module.exports=router;