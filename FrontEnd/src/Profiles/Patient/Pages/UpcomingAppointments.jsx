import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../../../Components/UI Components/Card/PatientProfile";
import Cardint from "../../../Components/UI Components/Card/Patient/Cardint"
import OneButtoncard from "../../../Components/UI Components/Card/Patient/OneButtoncard";
import {text,title,tagcard} from '../Files/ThreeCards'
import {
  emptydataerror,
  cardheading,
  hellogreet,
  upcomingcardmsg,
} from "../Files/Cardmsg";
import { getUpcomingAppointmentbyid } from "../../../../src/Redux/Action/PatientAction/PatientAction";
import Pagination from "../../../Components/Pagination/Pagination";
import "../Components/Css/UpcomingAppointments.css";
const UpcomingAppointments = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.Auth.profile._id);
  const patientname = useSelector((state) => state.Auth.profile.name);

  const AllUpcomingAppointments = useSelector( (state) => state.Patient.AllUpcomingAppointments);

  useEffect(() => {
    dispatch(getUpcomingAppointmentbyid(id));
  }, [dispatch, id]);

  const number = AllUpcomingAppointments.length;

  let show=false;
  if (number !== 0) {
    show = true;
  } 

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts, dataLength;
  if (AllUpcomingAppointments) {
    currentPosts = AllUpcomingAppointments.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    dataLength = AllUpcomingAppointments.length;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
if(AllUpcomingAppointments){
  var Appointments = currentPosts.map((appoint, i) => {
    return (
      <ProfileCard
        key={i + 1}
        showbutton={false}
        showratebutton={false}
        showstar={false}
        value1={upcomingcardmsg.title}
        value10={appoint.doctorId}
        key2={upcomingcardmsg.name}
        value2={appoint.doctorName}
        key3={upcomingcardmsg.symptoms}
        value3={appoint.symptoms.join(", ")}
        key4={upcomingcardmsg.date}
        value4={appoint.date}
        key6={upcomingcardmsg.time}
        value6={appoint.time}
      ></ProfileCard>
    );
  });
}
  return (
    
      <div className="container text-center">
        <h1 className="fw-bolder mt-3 mb-2 ugreeting">
          {hellogreet.greeting} {patientname} !!{" "}
        </h1>
        <h4 className="fw-bolder mt-1 mb-2 text-success ucomponent">
          {" "}
          {cardheading.Upcomingappointment}{" "}
        </h4>
      
          {show && <div className="row ">{Appointments}</div>}
          {!show && <h1 className="ugreeting">{emptydataerror.Upcomingmsg}</h1>}

          {show && (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={dataLength}
              paginate={paginate}
            />
          )}
         
        
      </div>
  
  );
};

export default UpcomingAppointments;
