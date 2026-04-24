import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../../../Components/UI Components/Card/Profilecardd";
import AppointmentImg from "../../../Assets/Images/Appointment.png";
import todayappoint from '../../../Assets/Images/todayappoint.gif'
import { getUpcomingAppointmentbyid } from "../../../Redux/Action/DoctorAction/DoctorAction";
import Pagination from "../../../Components/Pagination/Pagination"
import {dcard , dappointment, history_Appointment} from "../File/DoctorHistoryAppointment";

const UpcomingAppointment = () => {
  const dispatch = useDispatch()
  const id = useSelector((state) => state.Auth.profile._id);
  console.log("id from history")
  console.log(id)

  const AllUpcomingAppointments = useSelector((state) => state.Doctor.UpcomingAppointments);
  const doctorname = useSelector((state) => state.Auth.profile.name);
  console.log(AllUpcomingAppointments)

  useEffect(() => {
    dispatch(getUpcomingAppointmentbyid(id));
  },[dispatch,id]);


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  var currentPosts, dataLength;
  if (AllUpcomingAppointments) {
    currentPosts = AllUpcomingAppointments.slice(indexOfFirstPost, indexOfLastPost)
    dataLength = AllUpcomingAppointments.length;
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  let number = AllUpcomingAppointments.length
  console.log(number)


  var Appointments = currentPosts.map((appoint, i) => {
    return (
      <ProfileCard
        key={i + 1}
        src={AppointmentImg}
        classNameforbutton="card-body d-none"
      
        // key2={dcard.doctor_name}
        // value2={appoint.doctorName}
        key2={dcard.patient_name}
        value2={appoint.patientName}
        key3={dcard.disease}
        value3={appoint.disease}
        key4={dcard.symptons}
        value4={appoint.symptoms.join(", ")}
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
      
        <h1 className="text-center m-5"><strong>{dappointment.u_appointment}</strong></h1>
        
          <div className="container">
            <div className=" row ">{Appointments}
              <Pagination postsPerPage={postsPerPage} totalPosts={dataLength} paginate={paginate} />
            </div>
          
        </div>
      </div>
    </>
  );
};

export default UpcomingAppointment