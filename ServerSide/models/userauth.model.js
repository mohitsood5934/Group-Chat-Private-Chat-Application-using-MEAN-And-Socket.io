var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

var signupSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    name:{
        type:String,
        required:true
    },
   nickName:{
        
        type:String,
        required:true

   },
   mobNumber:{
    type:Number,
    required:true
   },

  email:{
        type:String,
        required:true
    },
  password:{
        
     type:String,
     required:true

    }

});
var Users = mongoose.model('Users',signupSchema);
module.exports=Users;