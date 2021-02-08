import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Refer from './Login';

import Navbar from './Navbar';
import {Switch,Route, Redirect} from 'react-router-dom';
import Signup from './Signup';


const App =()=>{

return(
<>

<Navbar/>
<Switch>
<Route exact path="/" component={Refer} />
<Route exact path="/signup" component={Signup}/>


<Redirect to ="/" />
</Switch>


</>


  );
};
export default App;
