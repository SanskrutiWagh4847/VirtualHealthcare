import React from 'react';
import CovidLogo from '../../../Assets/SVG/CovidLogo.svg';
import HomePage from '../../../Components/Pages/HomePage';
import DoctorProfile from '../Pages/DoctorProfile'
import PatientAppointment from '../Pages/PatientAppointment'
import  MyAppointments from '../../../../src/Profiles/Patient/Pages/MyAppointments'
import AvailbleDoctors from '../Pages/AvailableDoctors';
import HistoryAppointment from '../../Patient/Pages/HistoryAppointment'
import UpcomingAppointments from '../../Patient/Pages/UpcomingAppointments'
import ContactUs from '../../../Components/Pages/ContactUs'
import UpdateProfile from '../../../Components/Pages/UpdateProfile'
import ViewProfile from '../../../Components/Pages/ViewProfile'
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";

import { useSelector } from "react-redux";
import PatientRating from '../Pages/PatientRating';

export default function NavBar() {
  let  profile = useSelector((state) => state.Auth.profile);
  let email = profile.email;
  let name = profile.name;
let role=profile.role;
  const logout = () => {
 
 
    localStorage.clear();
    window.location.reload(false);
   }

  return (
    <div >
      <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
              <img className=" logo  " src={CovidLogo} alt="" />

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
                      <button type="button " className="btn btn-light">
                        Home
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/available">
                      <button type="button " className="btn btn-light">
                      Available Doctors
                      </button>
                    </Link>
                  </li>

                  <li>
                    <div className="btn-group p-2 ">
                      <button
                        type="button"
                        className="btn  dropdown-toggle "
                        data-bs-toggle="dropdown"
                      >
                        Appointments
                      </button>
                      <ul className="dropdown-menu p-1 border border-secondary">
                        <li className="py-2 mt-0 rounded">
                          <div className="p-2">
                            <p className="ms-2 text-start">
                        <Link className="nav-link" to="/appointments">
                                <p className="fw-bolder">Today's Appointment</p>
                              </Link>
                            </p>
                            <p className="ms-2 mt-0 mb-0 text-start">
                            <Link className="nav-link" to="/HistoryAppointments">
                                <p className="fw-bolder">Past Appointments</p>
                              </Link>
                            </p>

                            <p className="ms-2 mt-0 mb-0 text-start">
                            <Link className="nav-link" to="/UpcomingAppointments">
                                <p className="fw-bolder">Upcoming Appointments</p>
                              </Link>
                            </p>
                          </div>
                         
                        </li>
                      </ul>
                    </div>
                 </li>



                 <li>
                    <div className="btn-group p-2 ">
                      <button
                        type="button"
                        className="btn  dropdown-toggle "
                        data-bs-toggle="dropdown"
                      >
                        Setting
                      </button>
                      <ul className="dropdown-menu p-1 border border-secondary">
                        <li className=" back py-2 mt-0 rounded">
                          <div className="p-2">
                            <p className="ms-2 text-start">
                              <strong>{name}</strong>
                            </p>
                            <p className="ms-2 mt-0 mb-0 text-start">
                              Role : {role}
                            </p>
                            <p className="ms-2 mt-0 mb-0 text-start">{email}</p>
                          </div>
                        </li>
                        <li style={{ fontSize: "20px" }}>
                          <Link
                            className="nav-link dropdown-item text-dark "
                            to="/ReachUs"
                          >
                            <small>Reach us</small>{" "}
                          </Link>
                        </li>
                        <li style={{ fontSize: "20px" }}>
                          <Link
                            className="nav-link dropdown-item text-dark "
                            to="/view"
                          >
                            <small>View Profile</small>{" "}
                          </Link>
                        </li>
                        <li style={{ fontSize: "20px" }}>
                          <Link
                            className="nav-link dropdown-item text-dark "
                            to="/update"
                          >
                            <small>Edit Profile</small>{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <button
                            className="btn btn-sm  "
                            style={{ fontSize: "20px" }}
                            onClick={logout}
                          >
                            Logout
                          </button>
                        </li>
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
    
            <Route path="/rating">
       <PatientRating></PatientRating>
              
            </Route>
      <Route path="/UpcomingAppointments">
        <UpcomingAppointments></UpcomingAppointments>
          </Route> 

          <Route path="/update">
     <UpdateProfile></UpdateProfile>
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



