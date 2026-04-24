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
const DoctorHomePage = () => {
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

  return (
    <div className="overflow-hidden">
      <div className=" container mx-auto">
        <div class="row ms-2 g-0">
          <div class="col col-md-6 col-12 align-self-center  ">
            <h1>
              {today_Appointment.hello} {doctorname} !!
            </h1>
            <h4
              className="fw-bolder m-5 consult-text"
            
            >
              {today_Appointment.welcome}
              <p>{today_Appointment.dpara}</p>
            </h4>
          </div>
          <div class="col col-md-6 col-12">
            <img src={hidoc} className="mx-auto img-fluid d-block" alt="..." />
          </div>
        </div>
      </div>

    </div>
  );
};

export default DoctorHomePage;
