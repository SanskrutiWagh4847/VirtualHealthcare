import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { upcoming_appointment, table_heading, button_name } from '../Files/Appointment'
import { getUpcomingAppointments, deleteUpcomingAppointment } from '../../../Redux/Action/AdminAction/AdminAction'
import Pagination from '../../../Components/Pagination/Pagination';
import AppointmentDashboard from '../Components/AppointmentDashboard'
import { useHistory } from 'react-router'
import AlertBox from '../Components/AlertBox';

function UpcomingAppointments() {

  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector(state => state.Admin.upcomingAppointments);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [postsPerPage] = useState(5);
  let List;
 
  const notification = useSelector(state => state.Admin.notification);
 
  useEffect(
    () => {
      dispatch(getUpcomingAppointments())
    }, [dispatch]
  )

  const deleteAppointment = (e) => {
    dispatch(deleteUpcomingAppointment(e.target.value))
    setShow(true);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts, dataLength;
  if (data) {
    currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
    dataLength = data.length;
  }

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  if (data) {
    List = currentPosts.map((user) => {
      return (
        <>
          <tr key={user._id}>

            <td>
              {user.doctorName}
            </td>

            <td className="text-capitalize">
              {user.patientName}
            </td>
            <td>
              {user.date}
            </td>
            <td>
              {user.time}
            </td>
            <td>
              <button className="btn btn-danger round-button btn-sm" value={user._id} onClick={deleteAppointment}>{button_name.delete}</button>
            </td>

          </tr>
        </>

      );
    });
  }



  return (
    <div className="container text-center">
      <AppointmentDashboard />
      {show &&
        <AlertBox notifications={notification} onClick={()=> setShow(false)}/>
      }
      <h2 className="m-5 text-navy">{upcoming_appointment.title}</h2>
      <div className="table-responsive">
        <table className="table tablesheet">
          <thead>
            <tr>

              <th>{table_heading.heading1}</th>
              <th>{table_heading.heading2}</th>
              <th>{table_heading.heading3}</th>
              <th>{table_heading.heading4}</th>
              <th>{table_heading.heading5}</th>
            </tr>
          </thead>
          <tbody>{List}</tbody>
        </table>
        <Pagination postsPerPage={postsPerPage} totalPosts={dataLength} paginate={paginate} />

      </div>
      <button className="btn btn-success round-button mb-5" onClick={() => { history.push('/dashboard') }}>{button_name.backToDashboard}</button>


    </div>
  )
}

export default UpcomingAppointments;