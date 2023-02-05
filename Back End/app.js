const express = require('express');
//const bodyparser=require('body-parser');
//const bcrpt=require('bcrypt')
//const jwt=require('jsonwebtoken')
var app=new express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extented:false}));
const cors=require('cors');
app.use(cors());
const mongoose=require('mongoose');
const employ = require('./routes/api/employeeData');
const user = require('./routes/api/loginData');


mongoose.connect('mongodb+srv://vrinda:nandanam@cluster0.ng3xsrn.mongodb.net/EmployeeDB?retryWrites=true&w=majority',
{
    useNewUrlParser:true
});


//app.post('/Create',(req,res)=>{

  //Jwt.verify(req.body.token,"myKey",(err,decoded)=>{
    //if(decoded && decoded.username){
       
      //let data = new EmployeeModel({ 
        //name: req.body.name, 
      //position: req.body.position,
    //location:req.body.location,
  //salary:req.body.salary
        
    
  //    data.save()
//        res.json({"status":"successfully"})
    

const path = require('path');
app.use(express.static(path.join(__dirname, '/build')));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname,'/build/index.html')); });
app.use('/api/employee',employ);
app.use('/api/user',user);

    app.listen(8082,()=>
{
    console.log(" listening to port 8082");
}
)