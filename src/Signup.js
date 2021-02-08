
import React from 'react';
import Footer from './Footer';

import foot from './images/Logo-2.png';

import { NavLink } from 'react-router-dom';
const Signup=()=>{


  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className=" col-md-10 col-11 mx-auto">
        <div className="row">
          <div className=" col-md-6 col-10 mx-auto bg-secondary text-center mt-3 card shadow">
               <br/><br/>
          <NavLink to="#" class="navbar-brand">
            <img src={foot} height="100" alt="CoolBrand " />
        </NavLink> 

        <div className=" text-light mb-5 mt-3"> 
        <h4>Hey...</h4>
        <h3 className=" font-weight-bold">if you are new here !!!</h3>
        <p> <small> Sign Up with your mobile number to get started</small></p>
        </div>
        {/* using br tag to make a border on a center  */}
        <br/><br/><br/><br/>
        <div className="col-12  hr2 mt-5 mb-5">
     </div>


          </div>

            {/*  right side   */}
          <div className=" col-md-6 col-10 mx-auto mt-3 card shadow">
          <form >
           
          <div class="mb-3  textbox1 mt-5">
  
  <i class="fa fa-user text-secondary" aria-hidden="true"></i>
    <input type="text" class="" id="exampleInputEmail1" aria-describedby="text" placeholder
      ="Name"
    />
  </div>
  <div class="mb-3  textbox1 ">
            
            <i class="fas fa-envelope text-secondary"></i>
    <input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder
      ="EmailId"
    />
  </div>
  <div class="mb-3  textbox1 ">
  
  <i class="fas fa-mobile text-secondary"></i>
    <input type="Number" class="" id="exampleInputEmail1" aria-describedby="Number" placeholder
      ="Mobile Number"
    />
  </div>
  <div class="mb-3 textbox1">                
  <i class="fa fa-lock text-secondary" aria-hidden="true"></i>
    <input type="password" class="" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <div class="mb-3 textbox1">                
  <i class="fa fa-lock text-secondary" aria-hidden="true"></i>
    <input type="password" class="" id="exampleInputPassword1" placeholder="Confirm Password"/>
  </div>

  <NavLink to="#"><button class="btn btn-warning w-100" type="button">Register</button></NavLink>

</form>
<div className=" mt-3 text-center text-danger"><p><small>Existing User?
 <span> <NavLink to="/Refer" className=" text-decoration-none">Login</NavLink><br/>
 </span> </small></p>
       
</div>
 <br/>
<div className="col-12  hr1 ">
     </div>

          </div>
        </div>



  

     </div>
     </div>
     </div>
        
        
    <Footer/>
    </>


  );
}





export default Signup;