import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "../../../Profiles/Doctor/Components/css/Profilecardd.css";
import { DoctorById } from "../../../Redux/Action/PatientAction/PatientAction";
import Prescription from "../../../Profiles/Doctor/Pages/Prescription";
import FileUpload from "../../../Profiles/Doctor/Pages/FileUpload";

const Profilecardd = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  var photoValue = props.value10 + "photo";


  var [photo, setphoto] = useState(false);

  const Doctorbyid = (e) => {
    var id = e.target.value;
    dispatch(DoctorById(id));
    console.log(id);
    history.push("/PDoctorProfile");
  };
  const bookAppointment = (e) => {
    var id = e.target.value;
    dispatch(DoctorById(id));
    console.log(id);
    history.push("/PatientAppointment");
  };

  var [sshow, setsshow] = useState(false);
  var show = (e) => {
    var id = e.target.value;
    console.log(id, sshow);
    if (id) {
      setsshow(!sshow);
      setphoto(false);
    }
  };

  var showPhoto = (e) => {
    var id = e.target.value;
    if (id) {
      setphoto(!photo);
      setsshow(false);
      console.log(sshow);
    }
  };

  return (
    <>
   
      <div className="col  ">
      <div className=" card todayCard shadow ">
        <div className="card-body">
          <h3 className="card-title mb-3">{props.value1}</h3>

          <div className="card-text text-muted text-start m-1">
          <span className="keyColor ">
          {props.key2}
          </span>
          {props.value2}
          </div>
          <div className="card-text text-muted text-start  m-1 mt-2">
          <b className="keyColor" >
          {props.key3}
          </b>
          {props.value3}
          </div>
          <div className="card-text text-muted text-start  m-1 mt-2">
          <b className="keyColor">
          {props.key4}
          </b>
          {props.value4}
          </div>
          <div className="card-text text-muted text-start m-1">
          <b className="keyColor">
          {props.key5}
          </b>
          {props.value5}
          </div>
          <div className="card-text text-muted text-start m-1">
          <b className="keyColor">
          {props.key6}
          </b>
          {props.value6}
          </div>
          <div className="card-text text-muted text-start  m-1 mt-2">
          <b className="keyColor" >
          {props.key7}
          </b>
          {props.value7}
          </div>
          <div className="card-text text-muted text-start  m-1 mt-2">
          <b className="keyColor" >
          {props.key8}
          </b>
          {props.value8}
          </div>
          <div className="card-text text-muted text-start  m-1 mt-2">
          <b className="keyColor" >
          {props.key9}
          </b>
          {props.value9}
          </div>




          <div className={props.color}>
                {props.status} {props.statusvalue}
              </div>

              {props.showbutton && (
            <div>
              <button
                value={props.value10}
                onClick={Doctorbyid}
                className="mt-2 w3-button w3-green me-2 w3-hover-border-color mb-3"
              >
                View Doctor
              </button>

              <button
                value={props.value10}
                onClick={bookAppointment}
                className=" mt-2 w3-button w3-blue mb-3"
              >
                Book Appointment
              </button>
            </div>
          )}
          {props.prescrips && <p>
            <button 
              class="btn button mt-2 "
              type="button"
              value={props.value10}
              onClick={show}
            >
              Add Prescription
            </button>
            <button
              class="btn button mt-2 "
              type="button"
              value={photoValue}
              onClick={showPhoto}
            >
              upload
            </button>
          </p>}
          {sshow && (
            <div>
              <div class="card card-body">
                <Prescription id={props.value10}></Prescription>
              </div>
            </div>
          )}

          {photo && (
            <div>
              <div class="card card-body">
                <FileUpload id={props.value10}/>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Profilecardd;
