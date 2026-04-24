import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import '../../UI Components/Card/PatientProfile.css'
import { DoctorById } from "../../../Redux/Action/PatientAction/PatientAction";
import Prescription from "../../../Profiles/Doctor/Pages/Prescription";
import FileUpload from "../../../Profiles/Doctor/Pages/FileUpload";
import PatientRating from "../../../Profiles/Patient/Pages/PatientRating";
export default function PatientProfile(props) {
 

    const dispatch = useDispatch();
  const history = useHistory();
  let photoValue = props.value10 + "photo";


 let [photo, setphoto] = useState(false);
 let showPhoto = (e) => {
  let id = e.target.value;
  if (id) {
    setphoto(!photo);
    setsshow(false);
    console.log(sshow);
  }
};
  const Doctorbyid = (e) => {
    let id = e.target.value;
    dispatch(DoctorById(id));
    console.log(id);
    history.push("/PDoctorProfile");
  };
  const bookAppointment = (e) => {
   let id = e.target.value;
    dispatch(DoctorById(id));
    console.log(id);
    history.push("/PatientAppointment");
  };

  let [sshow, setsshow] = useState(false);
  let show = (e) => {
    let id = e.target.value;
    console.log(id, sshow);
    if (id) {
      setsshow(!sshow);
      setphoto(false);
    }
  };

  let [showrate, setShowrate] = useState(false);
  let showr = (e) => {
    let id = e.target.value;
    console.log(id, showrate);
    if (id) {
      dispatch(DoctorById(id));
      setShowrate(!showrate);
    }
  };
 

    return (
        <div className="col  mb-4  mt-3 col-xs-12 ">
            
      <div className=" card h-100  patientcard shadow ">
        <div className="card-body">
          <h4 className="card-title text-center ">{props.value1}</h4>
          
        {props.showstarprofile && <h2 className="card-title mb-3 text-center ">{props.value1}
           <span className="text-warning text-end fs-3"> &#9733;</span>
           <span className="fs-3">{props.value5}</span> </h2>}

          <div className="card-text text-muted mb-2 text-center ">
          <span className="keyColor ">
          {props.key2}
          </span>
          {props.value2}
          </div>

          <div className="card-text text-muted mb-2  text-center ">
          <b className="keyColor" >
          {props.key3}
          </b>
          {props.value3}
          </div>

          <div className="card-text text-muted  mb-2 text-center">
          <b className="keyColor">
          {props.key4}
          </b>
          {props.value4}
          </div>

          {props.showstar && <div className="card-text mb-2  text-center ">
          <b className="keyColor">
          {props.key5}
          </b>
          <p className="fs-3"><span className="text-warning fs-1"> &#9733;</span>{props.value5}</p>
          </div>}

          <div className="card-text text-muted text-center mb-2 text-start">
          <b className="keyColor">
          {props.key6}
          </b>
          {props.value6}
          </div>

          <div className="card-text text-muted mb-2 text-center text-start">
          <b className="keyColor">
          {props.key7}
          </b>
          {props.value7}
          </div>
 
          <div className="card-text text-muted mb-2  text-start">
          <b className="keyColor">
          {props.key8}
          </b>
          {props.value8}
          </div>

  <div className="card-text text-muted mb-2 text-start">
          <b className="keyColor">
          {props.key9}
          </b>
          {props.value9}
          </div>

          <div className={props.color}>
                {props.status} {props.statusvalue}
              </div>

              {props.showbutton && (
            <div className=" mt-3 text-center">
              <button type="button" value={props.value10}
                onClick={Doctorbyid} className="btn button">View</button>
                <button type="button"  value={props.value10}
                onClick={bookAppointment} className="btn button">Consult</button>
            </div>
          )}
          {props.prescrips && <p>
            <button 
              className="btn button mt-3 "
              type="button"
              value={props.value10}
              onClick={show}
            >
              Add Prescription
            </button>
            <button
              className="btn button mt-2 "
              type="button"
              value={photoValue}
              onClick={showPhoto}
            >
              upload
            </button>
          </p>}


          {props.showratebutton && (
           
           
              <p className="text-center">
                <button
                  className="btn button mt-2 "
                  type="button"
                  value={props.value10}
                  onClick={showr}
                >
                   Rating
                </button>
              </p>
            
          )}

          {showrate && (
            <div>
              <div className="card card-body">
                <PatientRating id={props.value10}></PatientRating>
              </div>
            </div>
          )}
          {sshow && (
            <div>
              <div className="card card-body">
                <Prescription id={props.value10}></Prescription>
              </div>
            </div>
          )}

          {photo && (
            <div>
              <div className="card card-body">
                <FileUpload />
              </div>
            </div>
          )}
        </div>
      </div>
    
        </div>
    )
}
