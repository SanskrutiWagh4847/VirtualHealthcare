import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "../Card/detailcard.css";

export default function DetailCard(props) {
 

  let history = useHistory();

  const handleAppointment = () => {
    history.push("/PatientAppointment");
  };
  const handleBack = () => {
    history.push("/available");
  };

  return (
   <>
          <div className=" card  problemcardz shadow ">
            <div className="card-body  ">
             {props.showratestart && <h2 className="card-title mb-3 text-center ">
                {props.value1}
                <span className="text-warning text-end fs-3"> &#9733;</span>
                <span className="fs-3">{props.value5}</span>{" "}
              </h2>}
<div className="ms-5">
              <div className="card-text text-muted mb-2   text-start">
                <span className="keyColor ">{props.key2}</span>
                {props.value2}
              </div>
              <div className="card-text text-muted mb-2  text-start ">
                <b className="keyColor">{props.key3}</b>
                {props.value3}
              </div>
              <div className="card-text text-muted mb-2 text-start">
                <b className="keyColor">{props.key4}</b>
                {props.value4}
              </div>
              <div className="card-text text-muted mb-2 text-start ">
                <b className="keyColor">{props.key5}</b>
              </div>
              <div className="card-text text-muted mb-2 text-start">
                <b className="keyColor">{props.key6}</b>
                {props.value6}
              </div>
              <div className="card-text text-muted mb-2 text-start">
                <b className="keyColor">{props.key7}</b>
                {props.value7}
              </div>
              <div className="card-text text-muted mb-2 text-start">
                <b className="keyColor">{props.key8}</b>
                {props.value8}
              </div>
              <div className="card-text text-muted mb-2 text-start">
                <b className="keyColor">{props.key11}</b>
                {props.value11}
              </div>
              {props.rup &&<div className="card-text text-muted mb-2 text-start">
                <b className="keyColor">{props.key9}</b>
                {props.value9}&#8377;
              </div>}
              <div className={props.color}>
                {props.status} {props.statusvalue}
              </div>

              </div>
              {props.consult && (
                <div className="text-center mt-3">
                  <button
                    className="btn button mb-2 
              "
                    type="button "
                    onClick={handleAppointment}
                  >
                    <Link className="appointbutton" to="/PatientAppointment ">
                      Consult
                    </Link>
                  </button>
                  <button
                    className="btn button mb-2 
             "
                    type="button"
                    onClick={handleBack}
                  >
                    <Link className="appointbutton" to="/available ">
                      Go Back{" "}
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
       </>
  );
}
