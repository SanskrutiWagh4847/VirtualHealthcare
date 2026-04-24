import CanvasChart from "../Components/CanvasChart";
import AvailableDoctors from "./AvailableDoctors";
import LeaveDoctors from "./LeaveDoctors";

export default function ViewInfo() {

  return (
    <>
      <div className="container border-5 p-3 mt-2 mb-5">
    
          <div className="card card-body container mt-5 mb-5">
            <h5 className="mb-3 fw-normal text-navy text-center ">
              <b>Available Doctors List</b>
            </h5>

            <AvailableDoctors></AvailableDoctors>
          </div>
  
          <div className="card card-body container mt-5 mb-5">
            <h5 className="mb-3 fw-normal text-navy text-center ">
              <b>Doctors On Leave List</b>
            </h5>
            <LeaveDoctors></LeaveDoctors>
          </div>
        </div>
  
    </>
  );
}
