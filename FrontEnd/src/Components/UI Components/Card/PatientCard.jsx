import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./Cardc.css";
import { DoctorById } from "../../../Redux/Action/PatientAction/PatientAction";
import PatientRating from "../../../Profiles/Patient/Pages/PatientRating";

const Profilecardd = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

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

  var [showrate, setShowrate] = useState(false);
  var show = (e) => {
    var id = e.target.value;
    console.log(id, showrate);
    if (id) {
      dispatch(DoctorById(id));
      setShowrate(!showrate);
    }
  };

  return (
    <div key={props.key} className=" col col-sm col-xs-12 mb-5 mt-5 ">
      <div
        key={props.key}
        className="card  cardwidth h-100  contagion shadow rounded cardHover    "
       
      >
        <div className="card-body">
          <h5 className="fw-bold">{props.cardtitle}</h5>
          <img
            src={props.src}
            className="card-img-top border imgsize mb-2 rounded-circle"
            alt="Doctor"
          
          />
          <div className="ms-5">
            <p className="card-title mb-1 mt-0  text-start ">
              <b style={{ color: " #002db3" }}>{props.key1}</b> {props.value1}
            </p>
            <p className="card-title mb-1 mt-0 text-start ">
              <b style={{ color: " #002db3" }}>{props.key2}</b>
              {props.value2}
            </p>
            <p className="card-title mb-1 mt-0 text-start ">
              <b style={{ color: " #002db3" }}>{props.key3}</b> {props.value3}
            </p>
            <p className="card-title mb-1 mt-0 text-start ">
              <b style={{ color: " #002db3" }}>{props.key4}</b> {props.value4}
            </p>
            <p className="card-title mb-1 mt-0 text-start">
              <b style={{ color: " #002db3" }}>{props.key5}</b>
              {props.value5}
            </p>
            <p className="card-title mb-1 mt-0 text-start ">
              <b style={{ color: " #002db3" }}>{props.key6}</b> {props.value6}
            </p>
            <p className="card-title mb-1 mt-0 text-start ">
              <b style={{ color: " #002db3" }}>{props.key7}</b> {props.value7}
            </p>
            <p className="card-title mb-1 mt-0 text-start">
              <b style={{ color: " #002db3" }}>{props.key8}</b> {props.value8}
            </p>
            <p className="card-title mb-1 mt-0 text-start ">
              <b style={{ color: " #002db3" }}>{props.key9}</b> {props.value9}
            </p>
            <p className="card-title mb-1 mt-0 text-start ">
              <b style={{ color: " #002db3" }}>{props.key10}</b> {props.value10}
            </p>

            <p className={props.color}>
              {props.status} {props.statusvalue}
            </p>
          </div>
{/* rating */}
          {props.showratebutton && (
            <div>
           
              <p>
                <button
                  class="btn btn-primary"
                  type="button"
                  value={props.value10}
                  onClick={show}
                >
                   Rating
                </button>
              </p>
            </div>
          )}

          {showrate && (
            <div>
              <div className="card card-body">
                <PatientRating id={props.value10}></PatientRating>
              </div>
            </div>
          )}
{/* end rating */}
          {props.showbutton && (
            <div className="row justify-content-center">
              <div className="col">
                <button
                  value={props.value10}
                  onClick={Doctorbyid}
                  style={{ fontSize: "10px" }}
                  className="btn btn-sm  btn-primary  "
                >
                  View Doctor Profile
                </button>
              </div>
              <div className="col">
                <button
                  value={props.value10}
                  onClick={bookAppointment}
                  style={{ fontSize: "10px" }}
                  className=" btn btn-sm btn-primary "
                >
                  Book Appointment
                </button>
              </div>
            </div>
          )}

          {/* end view and book  */}
        </div>
      </div>
    </div>
  );
};

export default Profilecardd;
