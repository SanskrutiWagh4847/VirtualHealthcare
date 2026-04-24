import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatestatusbyId, getUser } from "../../../Redux/Action/DoctorAction/DoctorAction";
import TodaysAppointment from "../Pages/TodaysAppointment";
// import CovidLogo from "../../../Assets/SVG/CovidLogo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../Pages/DoctorHomePage";
import HistoryAppointment from "../Pages/HistoryAppointment";
import UpcomingAppointments from "../Pages/UpcomingAppointments";
import DoctorProfile from "../Pages/DoctorProfile";
import ViewProfile from '../Pages/ViewProfile';
import Prescription from "../Pages/Prescription";
import ContactUs from '../../../Components/Pages/ContactUs';
import { doctorNavbar } from "../File/DoctorNavBarFile";
export default function NavBar() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.Auth.profile);
  // const status = useSelector((state) => state.Auth.profile.status);
 
  var id =profile._id;
  var name=profile.name;
  var email=profile.email;
  var role =profile.role;

  const updateStatus = (e) => {
    //  dispatch(updatestatus(id, e.target.value))
    var payload = { status: e.target.value };
    console.log(payload);
    dispatch(updatestatusbyId(id, payload));
    
  };

  useEffect(() => {
    dispatch(getUser(id))
   
  }, [dispatch,id])

  const logout = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <div>
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
                      <button type="button " className="btn">
                       {doctorNavbar.home}
                      </button>
                    </Link>
                  </li>
                  <li>
                    <div className="btn-group p-2 ">
                      <button
                        type="button"
                        className="btn dropdown_button  dropdown-toggle "
                        data-bs-toggle="dropdown"
                      >
                       {doctorNavbar.appointment}
                      </button>
                      <ul className="dropdown-menu p-1 border border-secondary">
                        <li className="py-2 mt-0 rounded">
                          <div className="p-2">
                            <p className="ms-2 text-start">
                              <Link className="nav-link" to="/today">
                                <p className="fw-bolder">{doctorNavbar.t_appointment}</p>
                              </Link>
                            </p>
                            <p className="ms-2 text-start">
                              <Link className="nav-link" to="/upcoming">
                                <p className="fw-bolder">{doctorNavbar.u_appointment}</p>
                              </Link>
                            </p>
                            <p className="ms-2 mt-0 mb-0 text-start">
                              <Link className="nav-link" to="/history">
                                <p className="fw-bolder">{doctorNavbar.h_appointment}</p>
                              </Link>
                            </p>
                          </div>
                        
                        </li>
                      </ul>
                    </div>

                  </li>

                  {/* status---------------- */}
                  <li>
                    <select
                      onChange={updateStatus}
                      className="form-select dropdown_button pt-3 border-0 text-center"
                      // aria-label="Default select example"
                    >
                      {/* <option value="Available" defaultValue>{status}</option> */}
                      <option value="Available" defaultValue>{doctorNavbar.status}</option>
                      <option value="Leave">{doctorNavbar.leave}</option>
                      <option value="Available">{doctorNavbar.available}</option>
                      {/* <option value="Leave">Leave</option> */}
                    </select>
                  </li>
                  {/* ---------------update profile----- */}


                  <li>
                    <div className="btn-group p-2 ">
                      <button
                        type="button"
                        className="btn dropdown_button dropdown-toggle "
                        data-bs-toggle="dropdown"
                      >
                        {doctorNavbar.setting}
                      </button>
                      <ul className="dropdown-menu p-1 border border-secondary">
                        <li className=" back py-2 mt-0 rounded">
                          <div className="p-2">
                            <p className="ms-2 text-start">
                              <strong>{name}</strong>
                            </p>
                            <p className="ms-2 mt-0 mb-0 text-start">
                            {doctorNavbar.role} {role}
                            </p>
                            <p className="ms-2 mt-0 mb-0 text-start">{email}</p>
                          </div>
                        </li>

                        <li >
                          <Link
                            className="nav-link dropdown-item text-dark "
                            to="/view"
                          >
                            <small>{doctorNavbar.dropdown1}</small>{" "}
                          </Link>
                        </li>
                        <li >
                          <Link
                            className="nav-link dropdown-item text-dark "
                            to="/dprofile"
                          >
                            <small>{doctorNavbar.dropdown2}</small>{" "}
                          </Link>
                        </li>
                        <li className="nav-item"><Link className="nav-link dropdown-item text-dark" to="/ReachUs">
                        {doctorNavbar.dropdown3}</Link></li>
                        <li>
                          {" "}
                          <button
                            className="btn btn-sm  "
                           
                            onClick={logout}
                          >
                            {doctorNavbar.dropdown4}
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
            <Route path="/today">
              <TodaysAppointment></TodaysAppointment>
            </Route>

            <Route path="/leave">
              <Leave></Leave>
            </Route>

            <Route path="/upcoming">
              <UpcomingAppointments></UpcomingAppointments>
            </Route>

            <Route path="/history">
              <HistoryAppointment></HistoryAppointment>
            </Route>

            <Route path="/dprofile">
              <DoctorProfile></DoctorProfile>
            </Route>

            <Route path="/view">
            <ViewProfile></ViewProfile>
          </Route>
          <Route path="/ReachUs">
              <ContactUs></ContactUs>
            </Route>


            <Route path="/Prescription">
              <Prescription></Prescription>
            </Route>

            <Route path="/">
              <HomePage></HomePage>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Leave() {
  return <h2>Leave</h2>;
}
