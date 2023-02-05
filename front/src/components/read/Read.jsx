import React, { useEffect, useState } from "react";
import { Table,Button } from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import Navbar from "../Navbar";

import Footer from "../Footer";

const Read = () => {
    
  const [apiData, setApiData] = useState([]);
  const [visible, setVisible] = useState(true);
 
  useEffect(() => {
     const data=async()=>
     {
        var dataset= await  axios.get('api/employ/create')
       console.log(dataset);
     };
            
       
         
  },[])
  const getData=()=>
    {
      axios.get('/api/employ/read')
      .then((getData)=>{
      /*  setApiData(getData.data);*/
        console.log(getData.data);
      })
    }
    const onDelete=(id)=>
    {
      axios.delete('/api/employ/delete/'+id)
      .then((response)=>
      {if(response.data.status==="success")
      {
        alert("Employee deleted successfully");
        getData();
      }
      else
      {
        alert("Something went wrong");
      }
      })
    }
    
    const setData=(id,name,position,location,salary)=>{
      localStorage.setItem("ID",id);
      localStorage.setItem("name",name);
      localStorage.setItem("position",position);
      localStorage.setItem("location",location);
      localStorage.setItem("salary",salary);
          
    }
  return (
    <div>

 <section className="Background">
      
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col ">
            <div className="card card-table" >
              <div className="row g-0">
              <div className="d-flex justify-content-center pt-3">
              <h1 className="fw-Bolder mb-3 pb-3 headeing" >Employee </h1>
              </div>

       </div><div className="d-flex justify-content-center pt-3">
              <Link to='/Create'>
                     {visible &&<button type="button" className="btn btn-secondary btn-lg"> New Employee Creat</button>}
                     </Link>
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

export default Read