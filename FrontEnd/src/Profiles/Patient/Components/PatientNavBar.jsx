import React,{useEffect} from 'react';
// import CovidLogo from '../../../Assets/SVG/CovidLogo.svg';
import HomePage from '../Pages/PatientHomePage';
import DoctorProfile from '../Pages/DoctorProfile'
import PatientAppointment from '../Pages/PatientAppointment'
import  MyAppointments from '../../../../src/Profiles/Patient/Pages/MyAppointments'
import AvailbleDoctors from '../Pages/AvailableDoctors';
import HistoryAppointment from '../../Patient/Pages/HistoryAppointment'
import UpcomingAppointments from '../../Patient/Pages/UpcomingAppointments'
import ContactUs from '../../../Components/Pages/ContactUs'
// import EditProfile from '../../Reporter/Pages/EditProfile'

import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
// import Newupdate from '../../../Components/Pages/Newupdate'
import PatientProfile from '../Pages/PatientProfile';
import { useSelector } from "react-redux";
import PatientRating from '../Pages/PatientRating';
import ViewProfile from '../../Reporter/Pages/ViewProfile';
import { useDispatch } from "react-redux";
import './Css/Patient.css'
import { getUser } from '../../../Redux/Action/ReporterAction/ReporterAction';


export default function NavBar() {
  const dispatch =useDispatch()
  let  profile = useSelector((state) => state.Auth.profile);
  let email = profile.email;
  let id = profile._id;
  let name = profile.name;
let role=profile.role;
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
      <nav className="navbar navbar-expand-lg navbar-light  sticky-top">
          <div className="container">
            {/* <img className="logo  " src={CovidLogo} alt="" /> */}

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
                  <Link className="nav-link" to="/available">
                    <button type="button" className="btn dropdown_button">
                      Avaliable Doctor
                    </button>
                  </Link>
                </li>
         
                
                <li>
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn  pt-3 dropdown_button dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Appointments
                      </button>
                      <ul class="dropdown-menu" stye={"size: 20px"}>
                      <li className="nav-item">
                        <Link className="nav-link" to="/appointments">
                      <button type="button " className="btn ">
                      Today's Appointments
                      </button>
                        </Link>
                        </li> 
                        <li>
                          <Link className="nav-link" to="/HistoryAppointments">
                            <button type="button" className="btn ">
                             Past Appointment
                            </button>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/UpcomingAppointments">
                            <button type="button" className="btn ">
                            Upcoming Appointment
                            </button>
                          </Link>
                        </li>
                      </ul>
                          
                    </div>
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
                        
                        <li className="fontnavbar" ><Link className="nav-link dropdown-item text-dark " to="/view"> 
                         <small>View Profile</small> </Link></li>
                         <li className="fontnavbar" ><Link className="nav-link dropdown-item text-dark " to="/ReachUs"> 
                         <small>Reach Us</small> </Link></li>
                         <li className="fontnavbar" ><Link className="nav-link dropdown-item text-dark " to="/Editme">
                         <small>Edit Profile</small> </Link></li>

                        {/* <li className="fontnavbar" ><Link className="nav-link dropdown-item text-dark " to="/edit">
                         <small>Edit Profile</small> </Link></li> */}
                         <li> <button className="btn btn-sm fontnavbar " onClick={logout}>Logout</button></li>
                     </ul>
                    </div>
                  </li>

              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/available">
             <AvailbleDoctors></AvailbleDoctors>
          </Route>
          <Route path="/PDoctorProfile">
          <DoctorProfile></DoctorProfile>
          </Route>
      
      <Route path="/PatientAppointment">
      <PatientAppointment></PatientAppointment>
      </Route>
      
      <Route path="/appointments">
        <MyAppointments></MyAppointments>
          </Route>
          <Route path="/ReachUs">
        <ContactUs></ContactUs>
          </Route>

          <Route path="/HistoryAppointments">
   < HistoryAppointment></HistoryAppointment>
      </Route>
      <Route path="/Editme">
        <PatientProfile></PatientProfile>

      </Route>
      
    
            <Route path="/rating">
       <PatientRating></PatientRating>
              
            </Route>
      <Route path="/UpcomingAppointments">
        <UpcomingAppointments></UpcomingAppointments>
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

