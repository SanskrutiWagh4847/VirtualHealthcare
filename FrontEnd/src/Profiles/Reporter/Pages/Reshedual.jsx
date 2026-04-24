import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAvaiableDoctors,
  RebookAppointment,
} from "../../../Redux/Action/ReporterAction/ReporterAction";

function Reshedual(props) {
  const dispatch = useDispatch();
  const avaiableDoctors = useSelector(
    (state) => state.Reporter.avaiableDoctors
  );
  const appointmentId = useSelector((state) => state.Reporter.appointmentId);

  useEffect(() => {
    dispatch(getAvaiableDoctors());
  }, [dispatch]);

  function rebook(doctor) {
    const id = appointmentId;
    const newdoctor = {
      doctorName: doctor.name,
      doctorNumber: doctor.Number,
      doctorEmail: doctor.email,
      speciality: doctor.speciality,
      fee: doctor.fee,
      status: doctor.status,
    };
    console.log(newdoctor);
    dispatch(RebookAppointment({ newdoctor, id }));
  }

  const List = avaiableDoctors.map((doctor) => {
    return (
      <tr key={doctor._id}>
        <td>{doctor._id}</td>
        <td>{doctor.name}</td>
        <td>{doctor.phone}</td>
        <td>{doctor.email}</td>
        <td> {doctor.speciality}</td>
        <td>{doctor.fee}</td>
        <td>{doctor.status}</td>
        <td>
          <button onClick={() => rebook(doctor)}>Confirmed</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1 className="mb-2">Avalible Doctors' List</h1>

      <table className="table table-striped m-5 striped bordered hover table-bordered">
        <thead>
          <tr>
            <th> ID</th>
            <th> Name</th>
            <th>Phone no.</th>
            <th>Email</th>
            <th>speciality</th>
            <th>Fee</th>
            <th>Status</th>
            <th>confirm</th>
          </tr>
        </thead>
        <tbody>{List}</tbody>
      </table>
    </>
  );
}

export default Reshedual;
