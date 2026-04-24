import React from "react";
import { useSelector } from "react-redux";

import PatientProfile from "../../../Components/UI Components/Card/DetailCard";
import { Doctorprofilemsg } from "../Files/Cardmsg.js";
import detailpic from "../../../Assets/Images/detailpic.png";
import "../Components/Css/Patient.css";
const DoctorProfile = () => {
const Doctorprofile = useSelector((state) => state.Patient.DoctorById);

if(Doctorprofile){
  var DoctorProfileCard = Doctorprofile.map((doctor, i) => {
    return (
      <PatientProfile
        key={i + 1}
        consult={true}
        value10={doctor._id}
        value1={doctor.name}
        key2={Doctorprofilemsg.email}
        value2={doctor.email}
        key3={Doctorprofilemsg.phone}
        value3={doctor.phone}
        key4={Doctorprofilemsg.speciality}
        value4={doctor.speciality}
        value5={Math.floor(doctor.rate)}
        key6={Doctorprofilemsg.status}
        value6={doctor.status}
        key7={Doctorprofilemsg.location}
        value7={doctor.location}
        key8={Doctorprofilemsg.hospital}
        value8={doctor.hospital}
        key9={Doctorprofilemsg.fee}
        value9={doctor.fee}
      ></PatientProfile>
    );
  });
}
  return (
    <div className="container overflow-hidden">
      <div className="d-flex justify-content-center mt-5">
        <div className="card border-0 bg-transperant  w-75 ">
          <div className="row ">
            <div className="col-md-4  col-xs-12">
              <img
                src={detailpic}
                className="img-fluid profileimg rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 mt-5 col-xs-12   ">
              {DoctorProfileCard}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
