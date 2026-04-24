import { useDispatch, useSelector } from "react-redux";
import {
  getTodayAppointments,
  getDoctorsInfo,
  getAvaiableDoctors,
  redhedualAppointmentId,
  RebookAppointment,
  getLeaveDoctors,
} from "../../../Redux/Action/ReporterAction/ReporterAction";
import { useEffect, useState } from "react";
import ProfileCard from "../../../Components/UI Components/Card/ProfileCard";
import doctorImage from "../../../Assets/Images/doctor.jpg";
import "../Components/Reporter.css";
import Spinner from "../../../Components/UI Components/Spinner/Spinner";
import TableBody from "../../../Components/UI Components/Table/TableBody";
import TableHead from "../../../Components/UI Components/Table/TableHead";
import Offcanvas from "../../../Components/UI Components/Offcanvas/Offcanvas";
import Modal from "../../../Components/UI Components/Modal/Modal";
import Pagination from "../../../Components/Pagination/Pagination";

function TodaysAppointments() {
  const dispatch = useDispatch();

  const today = new Date();
  const date =
    today.getDate() + "-0" + (today.getMonth() + 1) + "-" + today.getFullYear();

  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;
    const strTime = hours + ":" + minutes + " ";
    return strTime;
  }

  const currentTime = formatAMPM(today).toString();
  const data = useSelector((state) => state.Reporter.todayappointments);
  const doctorInfo = useSelector((state) => state.Reporter.doctorInfo);
  const leavedoctors = useSelector((state) => state.Reporter.leaveDoctors);
  const availabledata = useSelector((state) => state.Reporter.avaiableDoctors);
  const rebookId = useSelector((state) => state.Reporter.rebookId);
  const notification = useSelector((state) => state.Reporter.notification);

  let loading = true;
  let cardLoading = true;
  const leaveId = [];
  let doctorCard;
  let avaliblelist;

  if (leavedoctors) {
    for (let i = 0; i < leavedoctors.length; i++) {
      let ID = leavedoctors[i]._id;
      leaveId.push(ID);
    }
  }

  useEffect(() => {
    dispatch(getTodayAppointments());
    dispatch(getLeaveDoctors());
  }, [dispatch]);

  const chechStatus = (docId, id) => {
    cardLoading = true;
    dispatch(getDoctorsInfo(docId));
    dispatch(getAvaiableDoctors());
    dispatch(redhedualAppointmentId(id));
  
  };
  let newDoctor;
  const selectedDoctor = (e) => {
    let recived = e.target.value;
    let doctor = recived.split(" ");

    let doctorName = doctor[1];
    let doctorId = doctor[0];
    console.log(doctorName, doctorId);

    newDoctor = {
      doctorId,
      doctorName,
    };

  };

  const reshedual=()=>{
    dispatch(RebookAppointment(rebookId, newDoctor));
  }

  if (availabledata) {
    avaliblelist = availabledata.map((doctor, i) => {
      let send = doctor._id + " " + doctor.name;
      return (
        <>
          <option key={i + 1} value={send} className="text-uppercase">
            {doctor.name}
          </option>
        </>
      );
    });
  }

  if (doctorInfo) {
    doctorCard = doctorInfo.map((doctor, i) => {
      let color = null;
      let show;
      if (doctor.status === "Leave") {
        color = "bg-danger text-white";
        show = false;
      } else {
        color = "bg-success text-white";
        show = true;
      }
      cardLoading = false;
      return (
        <>
          <div className="container">
            <ProfileCard
              ukey={i + 1}
          
              key2="Name : "
              value2={doctor.name}
              key3="Phone : "
              value3={doctor.phone}
              key4="Speciality :"
              value4={doctor.speciality}
              key5="Consulting Fee : "
              value5={doctor.fee}
              status="Status : "
              statusvalue={doctor.status}
              classNameforbutton="card-body d-none"
              src={doctorImage}
              color={color}
            ></ProfileCard>

            {show && (
              <h4 className="bg-success text-white p-2 mt-2">
                Doctor Will Attend the Appointment!!{" "}
              </h4>
            )}
            {!show && (
              <div className='text-center'>
                <h4 className="bg-danger text-white p-2 mt-2">
                  Please Reschedule the Appointment!!{" "}
                </h4>

                <h5 className="mt-3">
                  Plase select the Availble Doctor From Drop Down
                </h5>

                <select
                  className="form-select mt-3 mb-5 "
                  onChange={selectedDoctor}
                  aria-label="Default select example"
                >
                  <option defaultValue>Available Doctor List</option>
                  {avaliblelist}
                </select>
                <button
                  type="button"
                  className="btn btn-primary text-center"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={reshedual}
                >
                  Confirmed
                </button>
              </div>
            )}
          </div>
        </>
      );
    });
  }


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts, dataLength;
  if (data) {
    currentPosts = data.sort((a, b) => (a.time > b.time ? 1 : -1)).slice(indexOfFirstPost, indexOfLastPost);
    dataLength = data.length;
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  let List;
  if (data) {
    loading = false;

    List = currentPosts
     
      .map((appointment, i) => {
        let showstaus, color, background, action;
        let status = leaveId.includes(appointment.doctorId);

        if (status === true) {
          showstaus = "Leave";
          color = "bg-danger text-white ";
        } else {
          showstaus = "Available";
          color = "bg-success text-white ";
        }

        if (appointment.time > currentTime) {
          background = "hilight";
          action = "Check Status";
        } else {
          background = "hilight2";
          color = "text-dark";
          action = "Done";
        }

        return (
          <TableBody
            key={i}
            no={i + 1}
            id={appointment._id}
            name={appointment.doctorName}
            patientname={appointment.patientName}
            time={appointment.time}
            status={showstaus}
            onClick={() => chechStatus(appointment.doctorId, appointment._id)}
            isappointmentTable={true}
            buttontitle={action}
            tableClass={background}
            idClass="hide  textsize"
            nameClass="text-uppercase hidephone  textsize"
            patientnameClass="text-uppercase  textsize"
            timeClass=" textsize"
            statusClass={color}
            buttonClass="btn btn-link  textsize "
          >
         
          </TableBody>
        );
      });
  }
  return (
    <>
      <div className="container ">
        <div className="overflow-auto">
          <h2 className="m-4 text-navy text-center ">Todays Appointment</h2>
          <p className="fw-bold text-center mb-0 "> Date: {date}</p>
          <p className="fw-bold text-center mb-3 mt-0 "> Time: {currentTime}</p>

          <div className="card card-body container mt-5 mb-5">
            {loading ? (
              <Spinner></Spinner>
            ) : (
              <TableHead
                no="SR NO"
                id="Appointment ID"
                name="Doctor Name"
                patientname="Patient Name"
                status="Status"
                time="Time"
                ButtonTitle="Action"
                idClass="hide textsize"
                nameClass="hidephone textsize"
                phoneClass="hidephone"
                tableBody={List}
                isappointmentTable={true}
              ></TableHead>
            )}
          </div>
          <Offcanvas loading={cardLoading} doctorCard={doctorCard}></Offcanvas>
        </div>
         <Modal notification={notification} ></Modal>
         <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={dataLength}
                    paginate={paginate}
                  />
      </div>
    </>
  );
}

export default TodaysAppointments;
