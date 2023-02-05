import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import React, {  useState } from "react";
import Footer from '../Footer';
const Login = () => {

const navigate=useNavigate();
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');



const userAuthentication = ()=>{

  if(username==='')
  {
    alert("Username must be required")
  } if(password==='')
  {
    alert("Password must be required")
  }
  else 
  {
      const userData=
      {
        "username":username,
        "password":password
      }
      axios.post(`api/user/signin`,
      userData
      ).then((getData)=>{

            if(getData.data.status==="successfully")
            {
              let token=getData.data.token;
              let userId=getData.data.data[0]._id;
              let userType=getData.data.data[0].usertype;
              sessionStorage.setItem("userToken",token);
              sessionStorage.setItem("userId",userId);
              sessionStorage.setItem("userType",userType);
              navigate("/home");

            }
            else
            {
              alert("Invalid login");
            }
      }
      )}
  }
  return (
    <div>
        
        <div className="d-flex justify-content-center py-3 bg-secondary">
                 
              <h1 className="text-white  heading">EMPLOYEE</h1>
               </div>
          


        <div> <section className="Background">
      
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-6">
            <div className="card card-form" >
              <div className="row g-0">
            
                 
              <form>
                <div className="card-body p-md-5 text-black">
              <div className="d-flex justify-content-center pt-3">
                <h1 className="fw-Bolder mb-3 pb-3 headeing" >LOGIN</h1>
                </div>
                <br/><br/>
    <div className="form-outline mb-2">
  
      <input type="text" onChange={(e)=>setUsername(e.target.value)}  className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" required/>
     
    </div>
    <br/>
    <div className="form-outline mb-2">
    
      <input type="password" onChange={(e)=>setPassword(e.target.value)}  className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" required/>
    </div>
    <br/>
      
  
    <br/>
    <div className="d-flex justify-content-center pt-3">
  
                        <button type="button" className="btn btn-secondary btn-lg">Cancel</button>
                     
                        <button onClick={userAuthentication} type="button" className="btn btn-secondary btn-lg ms-2">Login</button>
                      </div> 
    </div>
  </form>
      
              </div>
            </div>
          </div>
        </div>
      </div>
  
  </section>
      </div>
<Footer/>
    </div>
  )
}

export default Login