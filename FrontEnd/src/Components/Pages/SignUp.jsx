import React from "react";
import "../Pages/css/SignUp.css";
import doctorReg from "../../Assets/SVG/doctorReg.svg";
import patientReg from "../../Assets/SVG/patientReg.svg";
import { Link } from "react-router-dom";
import Pregister from "../Pages/Pregister";
import Dregister from "./Dregister";

const SignUp = () => {
  return (
    <>
      <h1 className="text-center pt-3">
        <strong>I want to sign up as..</strong>
      </h1>

      <div className="row container text-center">
        <div className="col">
          <img className="signup-Image" src={doctorReg} alt="doctor" />
          <Link to="/Dregister">AS A DOCTOR</Link>
        </div>

        <div className="col">
          <img className="signup-Image" src={patientReg} alt="patient" />
          <Link to="/Register">AS A PATIENT</Link>
        </div>
      </div>

      {/* routes should be in App.js NOT here */}
      <Dregister />
      <Pregister />
    </>
  );
};

export default SignUp;