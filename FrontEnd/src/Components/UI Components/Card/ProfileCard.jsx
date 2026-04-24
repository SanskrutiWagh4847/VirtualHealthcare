
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { DoctorById } from "../../../Redux/Action/PatientAction/PatientAction";


const ProfileCard = (props) => {
  const dispatch = useDispatch();
  const history=useHistory();

const Doctorbyid =(e)=>{
  var id=e.target.value
  dispatch(DoctorById(id))
  console.log(id);
  history.push('/PDoctorProfile')
}
const bookAppointment =(e)=>{
  var id=e.target.value
  dispatch(DoctorById(id))
  console.log(id);
  history.push('/PatientAppointment')
}

  return (
   
    <div  key={props.ukey} className =" col col-sm col-xs-12 mb-4">
      <div
       
        className="card shadow-lg p-3 mb-5 bg-body rounded p-2 bd-highlight"
        style={props.style}
      >

        <div className="card-body" style={{ textAlign: "center" }}>

          <h5 className="fw-bold">Doctor Profile:</h5>
          <img
            
            src={props.src}
            className="card-img-top border border-3 mb-3 border-dark rounded-circle"
            alt="Doctor"
            style={{ height: "150px",width:'150px'}}
          />
          <div className="ms-5">
          <p className="card-title mb-1 mt-0 text-start "><b style={{color:'navy'}}>{props.key1}</b> {props.value1} </p>
          <p className="card-title mb-1 mt-0 text-start "><b style={{color:'navy'}}>{props.key2}</b>{props.value2} </p>
          <p className="card-title mb-1 mt-0 text-start "><b style={{color:'navy'}}>{props.key3}</b> {props.value3} </p>
          <p className="card-title mb-1 mt-0 text-start "><b style={{color:'navy'}}>{props.key4}</b> {props.value4} </p>
          <p className="card-title mb-1 mt-0 text-start "><b style={{color:'navy'}}>{props.key5}</b>{props.value5} /- </p>
          <p className="card-title mb-1 mt-0 text-start "><b style={{color:'navy'}}>{props.key6}</b> {props.value6} </p>
          <p className="card-title mb-1 mt-0 text-start "><b style={{color:'navy'}}>{props.key7}</b> {props.value7} </p>
          <p className="card-title mb-1 mt-0 text-start "><b style={{color:'navy'}}>{props.key8}</b> {props.value8} </p>
          <p className="card-title mb-1 mt-0 text-start "><b style={{color:'navy'}}>{props.key9}</b> {props.value9} </p>
         
         
        

        </div>
        <p className={props.color}>{props.status} {props.statusvalue}</p>
          </div>
        <div className={props.classNameforbutton}>
     
          <button  value={props.value1} onClick={Doctorbyid}
          className="btn mt-4 btn-outline-primary rounded ">View Doctor</button>
                                                          
           <button value={props.value1} onClick={bookAppointment}
            className="btn mt-4 btn-outline-primary rounded ">Book Appointment</button>
                                                            
         

   
               
              </div>
      </div>
      </div>
   
  );
};

export default ProfileCard;
