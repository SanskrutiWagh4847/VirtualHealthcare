import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ApprovedDoctors from '../Pages/ApprovedDoctors';
import PendingDoctor from '../Pages/PendingDoctors';
import PatientData from '../Pages/PatientData';
import ViewQueries from '../Pages/ViewQueries';
import AppointmentHistory from '../Pages/AppointmentHistory'
import UpcomingAppointments from '../Pages/UpcomingAppointments'
import TodaysAppointments from '../Pages/TodaysAppointment'
import LeaveDoctors from '../Pages/DoctorsOnLeave'
import AvailableDoctors from '../Pages/AvailableDoctors'
import AdministrationData from '../Pages/AdministrationData';
import EditProfile from '../../Reporter/Pages/EditProfile';
import ViewProfile from '../../Reporter/Pages/ViewProfile'
import ShowAllData from '../Pages/Dashboard';
import { useSelector } from "react-redux";

import './Admin.css'


export default function NavBar() {
  const profile = useSelector((state) => state.Auth.profile);
  const email = profile.email;
  const name = profile.name;
  const role = profile.role


  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
  }


  return (

    <div >
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light sticky-top">
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
                      <button type="button" className="btn dropdown_button">
                        Home
                      </button>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/administration">
                      <button type="button" className="btn dropdown_button me-2">
                        Administration
                      </button>
                    </Link>
                  </li>
                  <li>
                    <div className="btn-group">
                      <button type="button" className="btn pt-3 dropdown_button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Setting
                      </button>
                      <ul className="dropdown-menu dropdown-menu p-1 border border-secondary" >


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

                        <li><Link className="nav-link dropdown-item text-dark" to="/viewprofile">
                          <small>View Profile</small> </Link></li>
                        <li><Link className="nav-link dropdown-item text-dark" to="/editprofile">
                          <small>Edit Profile</small> </Link></li>
                        <li> <button className="btn btn-sm" onClick={logout}>Logout</button></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Switch>

            <Route path="/doctors" >
              <ApprovedDoctors />
            </Route>

            <Route path="/pendingdoctor" >
              <PendingDoctor />
            </Route>

            <Route path="/onleave" >
              <LeaveDoctors />
            </Route>

            <Route path="/available" >
              <AvailableDoctors />
            </Route>


            <Route path="/patients" >
              <PatientData />
            </Route>

            <Route path="/history" >
              <AppointmentHistory />
            </Route>
            <Route path="/upcoming" >
              <UpcomingAppointments />
            </Route>

            <Route path="/todays" >
              <TodaysAppointments />
            </Route>

            <Route path="/viewqueries" >
              <ViewQueries />
            </Route>

            <Route path="/administration" >
              <AdministrationData />
            </Route>

            <Route path="/editprofile" >
              <EditProfile />
            </Route>
            <Route path="/viewprofile" >
              <ViewProfile />
            </Route>

            <Route path="/" >
            <ShowAllData />
            </Route>

          </Switch>


        </div>
      </Router>

    </div>
  )
}
