import React from 'react'
import image from '../registration.jpg';
import { Button,  Form } from 'semantic-ui-react'

const Employee = () => {
  return (
    <div> <section className="Background">
      
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col ">
          <div className="card card-form" >
            <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
            <img className='logo ms-100 w-100 vh-100 img' src={Image} alt="logo"  />
                </div>
                <div className="col-xl-6">
            <form>
              <div className="card-body p-md-5 text-black">
              <div className="d-flex justify-content-center pt-3">
              <h1 className="fw-Bolder mb-3 pb-3 headeing" >Employees </h1>
              </div>
              <br/><br/>
  <div className="form-outline mb-2">

    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
   
  </div>
  <br/>
  <div className="form-outline mb-2">
  
    <input type="text" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Designation"/>
  </div>
  <br/>
 <div className="form-outline mb-2">
  
    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location"/>
   
  </div>
  <br/>
  <div className="form-outline mb-2">
  
    <input type="text" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Salary"/>
  </div>
  <br/>
  <div className="d-flex justify-content-center pt-3">
                      <button type="button" className="btn btn-secondary btn-lg">RESET</button>
                      <button type="submit" className="btn btn-secondary btn-lg ms-2">SUBMIT</button>
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
    </div>
  )
}

export default Employee