import React, { useEffect } from 'react';
import HomePage from '../../../Components/Pages/HomePage';
import TodaysAppointment from '../Pages/TodaysAppointments';
import ViewInfo from '../Pages/ViewInfo.jsx';
import EditProfile from '../Pages/EditProfile';
 import ViewProfile from '../Pages/ViewProfile';
 import './Reporter.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getUser } from '../../../Redux/Action/ReporterAction/ReporterAction';



export default function NavBar() {
  const dispatch = useDispatch();
  var profile = useSelector((state) => state.Auth.profile);
  var id =profile._id;
  var name=profile.name;
  var email=profile.email;
  var role =profile.role;
  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
   }

   useEffect(() => {
     dispatch(getUser(id))
    
   }, [dispatch,id])
   
  return (
    <div >
      <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top  ">
          <div className="container">
            
            <button
              className="navbar-toggler position-absolute top-0 end-0 mt-3 me-3 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-around"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <button type="button" className="btn dropdown_button ">
                      Home
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/todays">
                    <button type="button" className="btn dropdown_button">
                      Today's Appointments
                    </button>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/status">
                    <button type="button" className="btn dropdown_button">
                      Today's Status
                    </button>
                  </Link>
                </li>
                <li>
                    <div className="btn-group p-2 ">
                      <button type="button" className="btn  dropdown-toggle dropdown_button"
                       data-bs-toggle="dropdown">
                       Setting
                      </button>
                      <ul className="dropdown-menu p-1 border border-secondary" >
                        
                        <li className=" back py-2 mt-0 rounded">
                           <div className='p-2'>
                           <p className="ms-2 text-start"><strong>{name}</strong></p>
                           <p className="ms-2 mt-0 mb-0 text-start">Role : {role}</p>
                           <p className="ms-2 mt-0 mb-0 text-start">{email}</p>
                          
                          </div>
                         </li>
                       
                        <li ><Link className="nav-link dropdown-item text-dark " to="/view"> 
                         <small>View Profile</small> </Link></li>
                        <li ><Link className="nav-link dropdown-item text-dark " to="/edit">
                         <small>Edit Profile</small> </Link></li>
                         <li> <button className="btn btn-sm  " onClick={logout}>Logout</button></li>
                     </ul>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/todays">
             <TodaysAppointment></TodaysAppointment>
          </Route>

          <Route path="/status">
            <ViewInfo></ViewInfo>
          </Route>


          <Route path="/rprofile">
          <Profile></Profile>
          </Route>

          <Route path="/edit">
          <EditProfile></EditProfile>
          </Route>

          <Route path="/view">
            <ViewProfile></ViewProfile>
          </Route>

          <Route path="/">
          <HomePage></HomePage>
          </Route>

        </Switch>
      </div>
    </Router>
    </div>
  )
}
function Profile() {
  return <h2>Profile</h2>;
}