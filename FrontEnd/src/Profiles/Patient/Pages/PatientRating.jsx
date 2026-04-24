import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rate from "../../../Profiles/Patient/Components/Rate";
import {
  updateRating,
  DoctorById,
} from "../../../Redux/Action/PatientAction/PatientAction";
import { hellogreet } from "../Files/Cardmsg";
import AlertBox from "../../Admin/Components/AlertBox";
const PatientRating = (props) => {
  let id = props.id;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const messagemodal = useSelector((state) => state.Patient.notification);
  useEffect(() => {
    dispatch(DoctorById(id));
  }, [dispatch, id]);

  const Doctorprofile = useSelector((state) => state.Patient.DoctorById);

  console.log(Doctorprofile);
  const [rating2, setRating] = useState();
  
  return (
    <>
  {show && <AlertBox notifications={messagemodal} onClick={()=>{setShow(false)}}></AlertBox>}      
      <div className="container text-center">
        {" "}
        <Rate
          rating={rating2}
          onRating={(ratee) => {
            let rate = { rate: ratee };
            setRating(ratee);
            setShow(true);
            dispatch(updateRating(id, rate));

            console.log(rating2);
            console.log(ratee);
          }}
        />
        <p>
          {hellogreet.rating} {rating2}
        </p>{" "}
      </div>
    </>
  );
};

export default PatientRating;
