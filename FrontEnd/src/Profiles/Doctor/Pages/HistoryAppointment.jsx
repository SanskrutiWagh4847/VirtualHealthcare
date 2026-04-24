import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../../../Components/UI Components/Card/Profilecardd";
import AppointmentImg from "../../../Assets/Images/Appointment.png";
import todayappoint from '../../../Assets/Images/todayappoint.gif'
import { getHistoryAppointmentbyid } from "../../../../src/Redux/Action/DoctorAction/DoctorAction";
import Pagination from "../../../Components/Pagination/Pagination"
import {dcard , dappointment, history_Appointment} from "../File/DoctorHistoryAppointment";

const HistoryAppointment = () => {
  const dispatch = useDispatch()
  const id = useSelector((state) => state.Auth.profile._id);
  console.log("id from history")
  console.log(id)

  const Allhistoryappointments = useSelector((state) => state.Doctor.HistoryAppointments);
  const doctorname = useSelector((state) => state.Auth.profile.name);
  console.log(Allhistoryappointments)

  useEffect(() => {
    dispatch(getHistoryAppointmentbyid(id));
  },[dispatch,id]);


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  var currentPosts, dataLength;
  if (Allhistoryappointments) {
    currentPosts = Allhistoryappointments.slice(indexOfFirstPost, indexOfLastPost)
    dataLength = Allhistoryappointments.length;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  let number = Allhistoryappointments.length
  console.log(number)


  var Appointments = currentPosts.map((appoint, i) => {
    return (
      <ProfileCard
        key={i + 1}
        src={AppointmentImg}
        classNameforbutton="card-body d-none"
      
        key2={dcard.doctor_name}
        value2={appoint.doctorName}
        key3={dcard.patient_name}
        value3={appoint.patientName}
        key4={dcard.symptons}
        value4={appoint.symptoms}
        key5={dcard.date}
        value5={appoint.date}

        key6={dcard.time}
        value6={appoint.time}
      ></ProfileCard>
    );
  });

  return (
    <>
      <div className="overflow-hidden">
        <h1 className="text-center m-5"><strong>{dappointment.h_appointment}</strong></h1>
        
          <div className="container">
            <div className=" row ">{Appointments}
              <Pagination postsPerPage={postsPerPage} totalPosts={dataLength} paginate={paginate} />
            </div>
          
        </div>
      </div>
    </>
  );
};

export default HistoryAppointment