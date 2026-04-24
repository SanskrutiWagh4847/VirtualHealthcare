import "../Components/Reporter.css";
import { useDispatch, useSelector } from "react-redux";
import {getAvaiableDoctors,getDoctorsInfo} from "../../../Redux/Action/ReporterAction/ReporterAction";
import { useEffect,useState } from "react";
import ProfileCard from "../../../Components/UI Components/Card/ProfileCard";
import doctorImage from "../../../Assets/Images/doctor.jpg";
import Spinner from "../../../Components/UI Components/Spinner/Spinner";
import TableBody from "../../../Components/UI Components/Table/TableBody";
import TableHead from "../../../Components/UI Components/Table/TableHead";
import Offcanvas from "../../../Components/UI Components/Offcanvas/Offcanvas";
import Pagination from "../../../Components/Pagination/Pagination";

function AvailableDoctors() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.Reporter.avaiableDoctors);
  const doctorInfo = useSelector((state) => state.Reporter.doctorInfo);
  let loading=true;
  let cardLoading=true;
  let doctorCard;
  let List;

  useEffect(() => {
    dispatch(getAvaiableDoctors());
  }, [dispatch]);


  const profilecheck = (e) => {
    dispatch(getDoctorsInfo(e.target.value));
  };

 
 if (doctorInfo){
   doctorCard = doctorInfo.map((doctor, i) => {
    let color = null;
    if (doctor.status === "Leave") {
      color = "bg-danger text-white mt-3";
    } else {
      color = "bg-success text-white mt-3";
    }
    cardLoading=false;
    return (
      <>
      
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
      </>
    );
  });

 }


 const [currentPage, setCurrentPage] = useState(1);
 const [postsPerPage] = useState(5);

 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 let currentPosts, dataLength;
 if (data) {
   currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
   dataLength = data.length;
 }
 const paginate = (pageNumber) => setCurrentPage(pageNumber);




 
   if (data){
     loading=false;
   List = currentPosts.map((doctor, i) => {
    return (
      <TableBody key={i} 
             no={i+1}
             id={doctor._id}
             name={doctor.name}
             email={doctor.email}
             phone={doctor.phone}
             buttontitle="View"
             onClick={profilecheck}
             isDoctorsTable={true}
             tableClass='hilight'
             idClass='hide'
             nameClass='text-uppercase'
             emailClass="hide"
             phoneClass="hidephone"
             buttonClass='btn btn-success'
             

      > </TableBody>
     
    );
  });
   

  return (
    <div className="container">
      <div className="overflow-auto">

      {loading ? <Spinner></Spinner> :  
        <TableHead
         no= "SR NO"
         id='ID'
         name="Name"
         email="Email"
         phone="Phone"
         ButtonTitle='Profile'
         idClass='hide'
         emailClass="hide"
         phoneClass="hidephone"
         tableBody={List}
         isDoctorsTable= {true} 
        ></TableHead>}
       
      </div>
          <Offcanvas loading={cardLoading} doctorCard={doctorCard}></Offcanvas>
          <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={dataLength}
                    paginate={paginate}
                  />
    </div>
  );
}
}

export default AvailableDoctors;
