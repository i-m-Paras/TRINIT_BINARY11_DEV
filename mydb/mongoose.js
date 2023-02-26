var express=require('express');
var mongoose=require('mongoose');
var app=express();
mongoose.connect("mongodb://127.0.0.1:27017/ngoo",{
    useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{ 
    if(err){console.log(err);}
    else{console.log("sucessfully connected")}
})

app.use('./route.js');

app.listen(3000,()=>{
    console.log("on port 3000!!")
})


