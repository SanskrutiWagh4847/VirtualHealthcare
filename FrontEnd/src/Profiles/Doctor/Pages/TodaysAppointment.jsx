import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import hidoc from "../../../Assets/Images/hidoc.gif";
import ProfileCard from "../../../Components/UI Components/Card/Profilecardd";

import { getTodayAppointmentbyid } from "../../../../src/Redux/Action/DoctorAction/DoctorAction";
import Pagination from "../../../Components/Pagination/Pagination";
import { dcard } from "../File/DoctorCardFile";
// import cardBack from "../../../Assets/SVG/cardBack.svg"
// import cardHover from "../../../Assets/SVG/cardHover.svg"
import { dappointment, today_Appointment } from "../File/DoctorAppointmentFile";
const TodaysAppointment = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.Auth.profile._id);
  console.log("id from history");
  console.log(id);

  const Alltodayappointments = useSelector(
    (state) => state.Doctor.TodayAppointments
  );
  console.log(Alltodayappointments);

  useEffect(() => {
    dispatch(getTodayAppointmentbyid(id));
  },[dispatch,id]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const doctorname = useSelector((state) => state.Auth.profile.name);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  var currentPosts, dataLength;
  if (Alltodayappointments) {
    currentPosts = Alltodayappointments.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    dataLength = Alltodayappointments.length;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let number = Alltodayappointments.length;
  console.log(number);

  var Appointments = currentPosts.map((appoint, i) => {
    return (
      <ProfileCard
        prescrips={true}
        key={i + 1}
        value10={appoint._id}
        value1={appoint.patientName}
        key2={dcard.disease}
        value2={appoint.disease}
        key3={dcard.symptons}
        value3={appoint.symptoms.join(" , ")}
        key4={dcard.date}
        value4={appoint.date}
        key5={dcard.time}
        value5={appoint.time}
        key6={dcard.prescription}
        value6={appoint.prescrips}
      ></ProfileCard>
    );
  });
  return (
    <div className="overflow-hidden">
    
      <div className="overflow-hidden">
        <h1 className="text-center ">
          <strong>{dappointment.t_appointment}</strong>
        </h1>

        <div className="container">
          <div className=" row ">
            {Appointments}

            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={dataLength}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysAppointment;
