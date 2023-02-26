const mongoose=require('mongoose');
const schema=mongoose.schema;

const signinscheme= new schema({
    name:String,
    email:String,
    password:String,
    cpassword:String
})

const Signindata=new mongoose.model("Signindata",signinscheme);

module.exports=Signindata;