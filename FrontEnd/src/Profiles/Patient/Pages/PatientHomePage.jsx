import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DoctorAvailable } from "../../../Redux/Action/PatientAction/PatientAction";
import PatientProfile from "../../../Components/UI Components/Card/PatientProfile";
import doctorimg from "../../../Assets/Images/doctor.jpg";
import Pagination from "../../../Components/Pagination/Pagination";
import "../Components/Css/Patient.css";
import "../Components/Css/AvailableDoctor.css";
import { emptydataerror } from "../Files/Cardmsg";
import doctor from "../../../Assets/Images/doctor.gif";
import { greeting, heading, welcome } from "../Files/AvailableDoctorsfile";
import "../Components/Css/AvailableDoctor.css";
import Card from "../../Admin/Components/Card";
const AvailableDoctors = () => {
  const dispatch = useDispatch();
  const AvailableDoctor = useSelector((state) => state.Patient.AvailableDoctor);
  const patientname = useSelector((state) => state.Auth.profile.name);

  useEffect(() => {
    dispatch(DoctorAvailable());
  }, [dispatch]);

  let today = new Date();
  let curHr = today.getHours();
  let greet;
  if (curHr < 12) {
    greet = greeting.morning;
  } else if (curHr < 18) {
    greet = greeting.afternoon;
  } else {
    greet = greeting.evening;
  }

  let sorted = AvailableDoctor.sort((a, b) => (a.rate > b.rate ? -1 : 1));
  console.log(sorted);
  let topthree = sorted.slice(0, 5);
  console.log(topthree);
  let number = AvailableDoctor.length;

  if(AvailableDoctor){
  var topdoctor = topthree.map((doctor, i) => {
    return (
      <PatientProfile
        key={i + 1}
        showbutton={true}
        showratebutton={false}
        src={doctorimg}
        value10={doctor._id}
        value1={doctor.name}
        value2={doctor.email}
        value3={doctor.speciality}
        showstar={true}
        value5={Math.floor(doctor.rate)}
      ></PatientProfile>
    );
  });
}

let show=false ;
  if (number !== 0) {
    show = true;
  } 

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts, dataLength;
  if (AvailableDoctor) {
    currentPosts = AvailableDoctor.slice(indexOfFirstPost, indexOfLastPost);
    dataLength = AvailableDoctor.length;
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if(AvailableDoctor){
  var DoctorCard = currentPosts.map((doctor, i) => {
    return (
      <PatientProfile
        key={i + 1}
        prescrips={false}
        showbutton={true}
        showratebutton={false}
        showstar={true}
        value10={doctor._id}
        value1={doctor.name}
        value2={doctor.email}
        value3={doctor.education}
        value5={Math.floor(doctor.rate)}
      ></PatientProfile>
    );
  });
}

  return (
    <>
      <div className=" container">

          <div className="row mt-5 g-0">
            <div className="col-6  text-center col-md-5 mt-5">
              <h1 className="text-center">
                {greet} {patientname} !!
              </h1>
              <h4 className="fw-bolder greeting text-center mt-5 mb-2 consult-text">
                {welcome.welcomemsg}
                <p> {welcome.consultmsg}</p>
              </h4>
            </div>
            <div className="col-sm-6  col-md-7 ">
              <img src={doctor} alt=".." className="img-fluid" />
            </div>
          </div>


          <div className="collapse" id="collapsetoprate">
            <div className="card border-0 card-body">
              <div className="text-center mt-5">
                <h4 className="fw-bolder fs-2  text-success">
                  {" "}
                  {heading.head1}{" "}
                </h4>
              </div>
                <div className=" row ">{topdoctor}</div>
            </div>
          </div>
     
      </div>
    </>
  );
};

export default AvailableDoctors;
