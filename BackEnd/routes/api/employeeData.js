const express = require('express');
const { EmployeeModel } = require('../../models/employ');
const router=express.Router();
const bcrpt=require('bcrypt')
const jwt=require('jsonwebtoken')

router.post('/create',(req,res)=>{

    jwt.verify(req.body.token,"myKey",(err,decoded)=>{
        if(decoded && decoded.username){
       
            let data = new EmployeeModel({ 
                name: req.body.name, 
                position: req.body.position,
                location:req.body.location,
                salary:req.body.salary
            })
    
              data.save()
              res.json({"status":"successfull"})
    
    
        }
        else{
            res.json({"status":"incorrect user"})
    
        }
       })   
})

router.get('/test', (req, res) => res.send('employ route test'));
router.get('/read',async(req,res)=>{
try
{
 const data=await EmployeeModel.find()
  res.send(data);
}
catch(err)
{
    res.status(400).json({error:" employee not to display"});
}  
})

router.put('/update/:id',async(req,res)=>{
  try {
    let id=req.params.id;
const data= await EmployeeModel.findOneAndUpdate({"_id":id},req.body)
res.json({"status":"successfull"})
}
catch (error)
{
    res.status(400).json({error:" employee not update"});
}
   
})

router.delete('/delete/:id',async(req,res)=>{           
    try
    {
        let id=req.params.id;
       const data= await EmployeeModel.findOneAndDelete({"_id":id},req.body);
       res.json({"status":"successfull"})
    }
    catch (error)
    {
        res.status(400).json({error:" employee not deleted"});
    }
   
})
module.exports= router;