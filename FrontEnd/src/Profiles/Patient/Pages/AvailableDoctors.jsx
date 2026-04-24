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

          <div className="row  my-5 justify-content-evenly">
            <div className="col-10 col-md-5">
              <Card
                data=""
                button="Top rated"
                btnclass="btn fw-bold mt-4 btn-warning shadow "
                bgcolor="#feaab9"
                classNameData=" fw-bold  mb-2"
                collapscard="collapse"
                title="OUR TOP RATED DOCTORS"
                cardtoggle="#collapsetoprate"
              />
            </div>
            <div className="col-10 col-md-5">
              <Card
                data=""
                button="Available "
                btnclass="btn fw-bold mt-4 btn-warning shadow "
                bgcolor="#64c1df"
                collapscard="collapse"
                title="OUR AVAILABLE DOCTORS"
                cardtoggle="#collapseava"
              />
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

          <div className="collapse" id="collapseava">
            <div className="card border-0 card-body">
              <div className="text-center">
                <h4 className="fw-bolder fs-2  text-success">
                  {" "}
                  {heading.head2}
                </h4>
              </div>

             
                {show && <div className=" row ">{DoctorCard}</div>}

                {!show && (
                  <h1 className="greeting">{emptydataerror.Availablemsg}</h1>
                )}

                {show && (
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={dataLength}
                    paginate={paginate}
                  />
                )}
            
            </div>
          </div>
     
      </div>
    </>
  );
};

export default AvailableDoctors;
