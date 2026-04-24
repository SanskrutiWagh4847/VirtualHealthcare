import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../../../Components/UI Components/Card/PatientProfile";
import Cardint from "../../../Components/UI Components/Card/Patient/Cardint"
import {title,text,tagcard} from '../Files/ThreeCards'
import {
  emptydataerror,
  cardheading,
  hellogreet,
  todaycardmsg,
} from "../Files/Cardmsg";
import Pagination from "../../../Components/Pagination/Pagination";
import { getTodayAppointmentbyid } from "../../../../src/Redux/Action/PatientAction/PatientAction";
import "../Components/Css/MyAppointment.css";
import OneButtoncard from "../../../Components/UI Components/Card/Patient/OneButtoncard";


const MyAppointments = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.Auth.profile._id);
  const patientname = useSelector((state) => state.Auth.profile.name);
  const allAppointments = useSelector((state) => state.Patient.AllAppointments);
 
  useEffect(() => {
    dispatch(getTodayAppointmentbyid(id));
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts, dataLength;
  
  if (allAppointments) {
    currentPosts = allAppointments.slice(indexOfFirstPost, indexOfLastPost);
    dataLength = allAppointments.length;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const number = allAppointments.length;

  let show=false;
  if (number !== 0) {
    show = true;
  } 
if(allAppointments){
  var Appointments = currentPosts.map((appoint, i) => {
    return (
      <ProfileCard
        key={i + 1}
        showbutton={false}
        showratebutton={false}
        showstar={false}
        value1={todaycardmsg.title}
        value10={appoint.doctorId}
        key2={todaycardmsg.name}
        value2={appoint.doctorName}
        key3={todaycardmsg.symptoms}
        value3={appoint.symptoms.join(" ,")}
        key4={todaycardmsg.date}
        value4={appoint.date}
        key6={todaycardmsg.time}
        value6={appoint.time}
        key7={todaycardmsg.prescription}
        value7={appoint.prescrips}
      ></ProfileCard>
    );
  });
}
  return (
    <div className="overflow-hidden">
      <div className="container  text-center mt-5">
        <h1 className="fw-bolder fs-3 tgreeeting">
          {hellogreet.greeting} {patientname} !!{" "}
        </h1>
        <h4 className="fw-bolder fs-2  text-success">
          {" "}
          {cardheading.Todaysappointment}{" "}
        </h4>

          {show && <div className="row ">{Appointments}</div>}
          {!show && <h1 className="tgreeeting"> {emptydataerror.Todaymsg}</h1>}

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

export default MyAppointments;
