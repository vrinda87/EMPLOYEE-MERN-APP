const express = require('express');
const bodyparser = require('body-parser');
const bcrpt = require('bcrypt')
const jwt = require('jsonwebtoken')
var app = new express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extented: true}));
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
const employ = require('./routes/api/employeeData');
const user = require('./routes/api/loginData');


mongoose.connect('mongodb+srv://vrinda:anoopprp@cluster0.ng3xsrn.mongodb.net/EmployeeDB?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  });


app.post('/Create', (req, res) => {

  Jwt.verify(req.body.token, "myKey", (err, decoded) => {
    if (decoded && decoded.username) {

      let data = new EmployeeModel({
        name: req.body.name,
        position: req.body.position,
        location: req.body.location,
        salary: req.body.salary
      })
    
    data.save()
    res.json({ "status": "successfully" })
    }
    else{
      res.json({"status":"unauthorised user"})
    }
  })
})
const PORT = 8082;


app.listen(PORT, () => {
  console.log('server is started on http://localhost:8082');
})