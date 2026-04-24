import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApprovedDoctors } from "../../../Redux/Action/AdminAction/AdminAction";
import Profilecard from "../../../Components/UI Components/Card/PatientProfile";
import Cardint from "../../../Components/UI Components/Card/Patient/Cardint"
import {tagcard,text,title} from '../Files/ThreeCards'

import OneButtoncard from "../../../Components/UI Components/Card/Patient/OneButtoncard";

import {
  emptydataerror,
  hellogreet,
  cardheading,
  historycardmsg,
} from "../Files/Cardmsg";
import { getHistoryAppointmentbyid } from "../../../../src/Redux/Action/PatientAction/PatientAction";
import doctorimg from "../../../Assets/Images/doctor.jpg";
import Pagination from "../../../Components/Pagination/Pagination";
import "../Components/Css/HistoryAppointment.css";

const HistoryAppointment = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.Auth.profile._id);
  useEffect(() => {
    dispatch(getHistoryAppointmentbyid(id));
    dispatch(getApprovedDoctors());
  }, [dispatch, id]);

  const Allhistoryappointments = useSelector(
    (state) => state.Patient.AllHistoryAppointments
  );
  const patientname = useSelector((state) => state.Auth.profile.name);

  const number = Allhistoryappointments.length;
  let show=false;
  if (number !== 0) {
    show = true;
  } 



  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts, dataLength;
  if (Allhistoryappointments) {
    currentPosts = Allhistoryappointments.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    dataLength = Allhistoryappointments.length;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
if(Allhistoryappointments){

  var Appointmentslist = currentPosts.map((appoint, i) => {
    return (
      <Profilecard
        key={i + 1}
        src={doctorimg}
        showbutton={false}
        showratebutton={true}
        showstar={false}
        value1={historycardmsg.title}
        value10={appoint.doctorId}
        key2={historycardmsg.name}
        value2={appoint.doctorName}
        key3={historycardmsg.symptoms}
        value3={appoint.symptoms.join(" ,")}
        key4={historycardmsg.date}
        value4={appoint.date}
        key6={historycardmsg.time}
        value6={appoint.time}
        key7={historycardmsg.prescription}
        value7={appoint.prescrips}
      ></Profilecard>
    );
  });
}
  return (
    <div className="">
      <div className="container text-center">
        <h1 className="fw-bolder mt-3 mb-2 hgreeting">
          {" "}
          {hellogreet.greeting} {patientname} !!{" "}
        </h1>
        <h4 className="fw-bolder mt-1 mb-2 text-success happointment">
          {" "}
          {cardheading.Pastappointment}{" "}
        </h4>

          {show && <div className="row">{Appointmentslist}</div>}
          {!show && <h1 className="msg"> {emptydataerror.Historymsg}</h1>}
          {show && (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={dataLength}
              paginate={paginate}
            />
          )}
             
      </div>
    </div>
  );
};

export default HistoryAppointment;
