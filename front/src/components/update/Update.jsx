import axios from 'axios';
import image from '../registration.jpg';

import {useNavigate,Link} from 'react-router-dom' 

import React, { useState,useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';


const Update = () => {
  const navigate=useNavigate();
  const [name,setName]=useState('');
  const [position,setPosition]=useState('');
  const [location,setLocation]=useState('');
  const [salary,setSalary]=useState('');
  const [ID,setID]=useState(null);



  const sendDataToAPI = ()=>{
    if(name==="" || position==="" || location==="" || salary==="")
    {
      alert('value cant be empty');
    }
    else{

    
   // var token=sessionStorage.getItem("userToken");
    const employeeData=
    {
      "name":name,
      "position":position,
      "location":location,
      "salary":salary
    }
    axios.put(`http://localhost:8082/api/employ/update/${ID}`,
 employeeData
  ).then((response)=>{
    if(response.data.status==="success")
    {
      alert("successfully updated");
        navigate('/home');
    }
    else
    {
      alert("wrong");
    }
    
   })
  }
}
  useEffect(()=>{
    setName(localStorage.getItem('name'));
    setPosition(localStorage.getItem('position'));
    setLocation(localStorage.getItem('location'));
    setSalary(localStorage.getItem('salary'));
    setID(localStorage.getItem('ID'));
   
    },[]
    )

  return (
    <div> 
       <Navbar/>
       <section className="Background">
     
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col ">
          <div className="card card-form" >
            <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
            <img className='logo ms-100 w-100 vh-100 img' src={image} alt="logo"  />
                </div>
                <div className="col-xl-6">
            <form>
              <div className="card-body p-md-5 text-black">
              <div className="d-flex justify-content-center pt-3">
              <h1 className="fw-Bolder mb-3 pb-3 headeing" >Employees </h1>
              </div>
              <br/><br/>
  <div className="form-outline mb-2">

    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Name"/>
   
  </div>
  <br/>
  <div className="form-outline mb-2">
  
    <input type="text" value={position} onChange={(e)=>setPosition(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Designation"/>
  </div>
  <br/>
 <div className="form-outline mb-2">
  
    <input type="text"  value={location} onChange={(e)=>setLocation(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location"/>
   
  </div>
  <br/>
  <div className="form-outline mb-2">
  
    <input type="text" value={salary} onChange={(e)=>setSalary(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Salary"/>
  </div>
  <br/>
  <div className="d-flex justify-content-center pt-3">
  <Link to='/Home'>
                      <button type="button" className="btn btn-secondary btn-lg">BACK</button>
                      </Link>
                      <button onClick={sendDataToAPI} type="button" className="btn btn-secondary btn-lg ms-2">UPDATED</button>
                    </div> 
  </div>
</form>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</section>
<Footer/>
    </div>
  )
}

export default Update