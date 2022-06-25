const mongoose=require('mongoose');
var registerSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
})


const Register=new mongoose.model("RegisteredUser",registerSchema);
module.exports=Register; 