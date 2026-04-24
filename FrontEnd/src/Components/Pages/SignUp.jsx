import React from 'react'
import '../Pages/css/SignUp.css'
import doctorReg from '../../Assets/SVG/doctorReg.svg'
import patientReg from '../../Assets/SVG/patientReg.svg'

import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
// import Register from './Register';
import Pregister from '../Pages/Pregister'
import Dregister from './Dregister';
const SignUp = () => {
  

    return (
     <>
     
     <h1 className="text-center pt-3 ">
         <strong>I want to sign up as..</strong>
     </h1>
     <Router>

         

<div className="row container text-center">
<div className="col "><img className="signup-Image" src={doctorReg} alt="..." /><Link to='/Dregister'>AS A DOCTOR</Link> </div>
   
<div className="col "><img className="signup-Image" src={patientReg} alt="..." /><Link to='/Register'>AS A PATIENT</Link> </div> </div>

      <Switch>

<Route path="/Dregister">
<Dregister></Dregister>
</Route>

<Route path="/Register">
<Pregister></Pregister>
</Route>



</Switch>

</Router>
{/* 
    <Link to='/Dregister'>AS A DOCTOR</Link> 
   
    <Link to='/Register'>AS A PATIENT</Link>  */}
     </>
    )
}

export default SignUp
