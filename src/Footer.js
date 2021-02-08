import React from 'react';

const Footer =()=>{
    return(
      <>
   <div className="col-12  hr1 mt-3">
     
   </div>
<div className=" col-11 col-md-10 mx-auto">
 <div className="row border-secondary ">
     <div className=" col-md-4 col-4  mx-auto">
     <h5 className=" font-weight-bold ">NewsLetter <br/></h5>
    <p className=" font-weight-bold">Subscribe our NewsLetter</p>
     </div>

     <div className=" col-md-4 col-8 mx-auto">
         
   
   <input type="text" class="input-box mr-3" placeholder=" Email address"  align="right"/>
                        <input type="submit" class="btn btn-warning mt-1" value="Done" />
 
     </div>

     
   
 </div>
 </div>

         <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item col-6">
                        <h3>GET in Touch</h3>
                        <ul>
                            <li>+000000000</li>
                           
                            <li>info@mymarket.com</li>
                            <li>5th Avenue Mumbai maharastra</li>
                            <li>pincode-400064</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item col-6">
                        <h3>Policies</h3>
                        <ul>
                           <li>About</li>
                           <li>privacey</li>
                           <li>cookie-Policy</li>
                           <li>Security</li>
                           <li>Return</li>
                           <li>Term & Condition</li>
                           <li>Other</li>
                        </ul>
                    </div>

                    <div class="col-sm-6 col-md-3 item col-6">
                        <h3>Special Categories</h3>
                      
                        <ul>
                        <li>Mens</li>
                        <li>Womens</li>
                        <li>Kids</li>
                        <li>Electronics</li>
                        <li>Other Accessories</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item col-6">
                        <h3>Quick Links</h3>
                        <ul>
                        <li>My orders</li>
                        <li>My Account</li>
                        <li><input type="text" class="input-box mt-2" placeholder=" Suggest an idea" />
                        </li>
                        <li>
                        <input type="submit" class="btn btn-warning mt-2" value="Done" /></li>
                        </ul>
                    </div>
                   
                </div>
                
            </div>
        </footer>
    </div>
    <div className=" text-center mt-2 mb-2"> Copyright @ 2020 by MY MARKET</div>
      </>
    )
}
export default Footer;