
import React from 'react';
import Footer from './Footer';

import foot from './images/Logo-2.png';

import { NavLink } from 'react-router-dom';
const Refer=()=>{


  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className=" col-md-10 col-11 mx-auto">
        <div className="row">
          <div className=" col-md-6 col-10 mx-auto bg-secondary text-center mt-3 card shadow">
               <br/>
          <NavLink to="#" class="navbar-brand">
            <img src={foot} height="100" alt="CoolBrand " />
        </NavLink> 

        <div className=" text-light mb-5 mt-4"> 
        <h4>Hey...</h4>
        <h3 className=" font-weight-bold">if you are new here !!!</h3>
        <p> <small> Sign Up with your mobile number to get started</small></p>

        </div>
        <br/>
        <div className="col-12  hr2 mt-3 mb-5">
     </div>

          </div>

            {/*  right side   */}
          <div className=" col-md-6 col-10 mx-auto mt-3 card shadow">
          <form >
  <div class="mb-3 mt-5 textbox1 ">
  
  <i class="fa fa-user text-secondary" aria-hidden="true"></i>
    <input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder
      ="Email/MobileNumber"
    />
  </div>
  <div class="mb-3 textbox1">                
  <i class="fa fa-lock text-secondary" aria-hidden="true"></i>
    <input type="password" class="" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Keep me Logged in</label>
  </div>
  <NavLink to="#"><button class="btn btn-warning w-100" type="button">Login</button></NavLink>

</form>
<div className=" mt-3 text-center text-danger"><p><small>dont have an account?
 <span> <NavLink to="/Signup" className=" text-decoration-none">Signup</NavLink><br/>
 
 <NavLink to="/" className=" text-decoration-none">Forget Password?</NavLink></span> </small></p>
 <br/>

        <div className="col-12  hr1  ">
     </div>

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





export default Refer;