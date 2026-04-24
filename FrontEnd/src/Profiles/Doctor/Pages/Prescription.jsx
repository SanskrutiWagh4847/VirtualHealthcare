import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertBox from "../../Admin/Components/AlertBox";
import './Css/Prescription.css'

import { AddPrescrips } from "../../../Redux/Action/DoctorAction/DoctorAction";

function Prescription(props) {
  const notification = useSelector(state => state.Doctor.notification);
  var id = props.id;
  const dispatch = useDispatch();
  const [prescrips, setPrescrips] = useState("");
  const [show, setShow] = useState(false);

  const handlePrescriptionSubmit = (event) => {
    const prescription = {
      prescrips,
    };
    
    dispatch(AddPrescrips(id, prescription));
    setShow(true);
    console.log(prescription);
    // window.location.reload(false);
    setTimeout(() =>  window.location.reload(false), 2000);
  };

  const handlePrescrips = (event) => {
    setPrescrips(event.target.value);

  };

  return (
    <div>
      {show && 
         <AlertBox notifications={notification} onClick={()=> setShow(false)}/> }
      <div className="mb-3">
        <div><label for="formGroupExampleInput" className="form-label ps-1 row">
          Rx
        </label></div>
        <textarea
          type="textarea"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="prescription here"
          onChange={handlePrescrips}
        />
      </div>
      <div className="col-12 text-center">
        <button
          type="submit"
          onClick={handlePrescriptionSubmit}
          className="btn btn-primary button "
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Prescription;
