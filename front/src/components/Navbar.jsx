import React, { useEffect } from "react";
import axios from 'axios';
//import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
const Navbar = () => {
  const navigate=useNavigate();
    const logout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userType');
        localStorage.removeItem('userId');
        navigate('/')
      };
 useEffect(() => {
      
        var token=sessionStorage.getItem("userToken");
        const TokenData=
        {
          "token":token
    
        }
      axios.post(`http://localhost:8082/login`,
     TokenData
      ).then((response)=>{
    
    if(response.data.status==="Unauthorised user")
    {
    alert("Login first to access");
    navigate('/')
    }
   
     
       })
      })
      
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="collapse navbar-collapse Mainheader Mainheading" id="navbarTogglerDemo01">
             
              <h2 className="text-white  heading">Employees</h2>

              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              </ul>
    
             
    
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
                <li className="nav-item active nav-item">
                   <Button inverted color='white'onClick={logout} > LOGOUT</Button>
                </li>
              
    
               
    
              
    
              </ul>
            </div>
          </nav>
        </div>
  )
}

export default Navbar