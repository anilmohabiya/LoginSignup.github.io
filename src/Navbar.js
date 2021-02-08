import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import foot from './images/logo.png';

const Navbar =()=>{
    return(
      <>
      <div className="row color">
      <div className=" col-6 col-md-6 mx-auto">
      <div className="textbox">
<p class="alignleft p-2 px-4">call-us +91000000  <span className="p-1 col">CONTACT US</span></p>

</div>
</div>

<div className=" col-6 col-md-6 mx-auto">

<p class="aligncenter mr-3 p-2  "><span className="col1"> Bharani-BDH </span>
 <span className="p-1 col"><i class="fa fa-globe " aria-hidden="true"></i></span>
<span className="p- ">Language-EN <i class="fas fa-angle-down"></i> </span>
<span className="p-1 col"> sign in</span> </p>


</div>
</div>
 

      <div className="container-fluid nav_bg">
      <div className="row">
      <div className="col-md-10 col-12 mx-auto">
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light card shadow">
  <div className="container-fluid">
  <NavLink to="#" class="navbar-brand">
            <img src={foot} height="100" alt="CoolBrand " />
        </NavLink> 
        
        <p><small>Home 5th<br/> Avenue,Mumbai</small></p>
        
    
        <div class="dropdown mt-1 p-3 ">
  <button class="btn btn-light border-secondary dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   All
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link class="dropdown-item" to="#">Mens</Link>
    <Link class="dropdown-item" to="#">Womens</Link>
    <Link class="dropdown-item" to="#">Kids</Link>
  </div>
</div>


<form class="form-inline pull-xs-right mt-1 mr-3 w-75">
     
     <input class="form-control" type="text" placeholder="Search"/>
    
   </form>
      
    <button className="navbar-toggler" type="button "
     data-toggle="collapse" data-target="#navbarSupportedContent" 
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
   

     

        <li className="nav-item">
          <NavLink  className="nav-link" to="">
          <i class="fa fa-user" aria-hidden="true"></i> Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
          exact
           className="nav-link active" aria-current="page" to="/"><i class="fa fa-heart" aria-hidden="true"></i> Wishlist</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to="">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</NavLink>
        </li>
       
      
      </ul>
 
    </div>
  </div>
</nav>

<div className ="col-md-8 col-10 mx-auto">
  <nav class="nav nav-pills flex-column flex-sm-row mt-3 text-center">
  
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Brand</Link>
  
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">My Following</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">New Arrival</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Offers & sales</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Trending Products</Link>
  
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Just Sold</Link>
</nav>
</div>

<div class="form-group col-12">
          <hr/>
          </div>


      
      </div>
      </div>
      </div>
      </>
    );
};
export default Navbar;