import { useState, useEffect } from 'react';
import { pendingDoctor, table_heading} from '../Files/DoctorFile';
import { useDispatch, useSelector } from 'react-redux';
import { rejectDoctorAction,approveDoctorAction ,getPendingDoctors } from '../../../Redux/Action/AdminAction/AdminAction'
import Pagination from '../../../Components/Pagination/Pagination';
import DashBoardItems from '../Components/DoctorDashboard';
import { useHistory } from 'react-router'
import AlertBox from '../Components/AlertBox';

function PendingDoctor() {

  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector(state => state.Admin.pendingDoctors);
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  let List;
 
  const notification = useSelector(state => state.Admin.notification);
  

  useEffect(
    () => {
      dispatch(getPendingDoctors())
    }, [dispatch]
  )


  const rejectDoctor = (e) => {
    dispatch(rejectDoctorAction(e.target.value))
  }


  const approveDoctor = (e) => {
    const id = e.target.value;
    console.log(id)

    const user = {
      flag: true
    };
   dispatch(approveDoctorAction(user, id))
   setShow(true)

  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts, dataLength;
  if(data){
     currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
      dataLength = data.length;
  }
 
 
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  if(data){

   List = currentPosts.map((user) => {
    return (
      <tr key={user._id}>
     
        <td>
            {user.email}
        </td>

        <td>
        {user.name}
        </td>
         <td>
        {user.phone}
        </td>
         <td>
        {user.location}
        </td>
         <td>
       {user.education}
        </td>
         <td>
       {user.fee}
        </td>
         <td>
        {user.speciality}
        </td>

        <td>
          <button value={user._id} onClick={approveDoctor} className="btn btn-success round-button btn-sm">
           {pendingDoctor.button_name.approve}
          </button>
        </td>
        <td>
          <button value={user._id} onClick={rejectDoctor} className="btn btn-danger round-button btn-sm">
          {pendingDoctor.button_name.reject}
          </button>
        </td>
      </tr>
    );
  });

 }
  return (
    <div className="container text-center">
     <DashBoardItems />
     {show && <AlertBox notifications={notification} onClick={()=> setShow(false)}/> }
      <h2 className="m-5 text-navy">{pendingDoctor.title}</h2>
      
      <div className="table-responsive">
      <table className="table tablesheet">
        <thead>
          <tr>
          <th>{table_heading.heading1}</th>
              <th>{table_heading.heading2}</th>
              <th>{table_heading.heading3}</th>
              <th>{table_heading.heading4}</th>
              <th>{table_heading.heading5}</th>
              <th>{table_heading.heading6}</th>
              <th>{table_heading.heading7}</th>
              <th>{table_heading.heading8}</th>
              <th>{table_heading.heading9}</th>
          </tr>
        </thead>
        <tbody>{List}</tbody>
      </table>
      <Pagination postsPerPage={postsPerPage} totalPosts={dataLength}  paginate={paginate}/>
     
    </div>
    <button  className="btn btn-success round-button" onClick={() =>{history.push('/doctors')}}>{pendingDoctor.button_name.backToDashboard}</button>
   
    </div>
 
 
 
 )
}

export default PendingDoctor;