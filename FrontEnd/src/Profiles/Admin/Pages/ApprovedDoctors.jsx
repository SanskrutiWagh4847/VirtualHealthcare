
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approveDoctor, table_heading } from '../Files/DoctorFile'
import { getApprovedDoctors, deleteApprovedDoctor, editDoctor } from '../../../Redux/Action/AdminAction/AdminAction'
import Pagination from '../../../Components/Pagination/Pagination';
import { useHistory } from 'react-router'
import AlertBox from '../Components/AlertBox';
import DashBoardItems from '../Components/DoctorDashboard';
import '../../Reporter/Components/Reporter.css';
import {ExportToExcel} from '../Components/ExportToExcel';


function ApprovedDoctors() {

  const dispatch = useDispatch();
  const history = useHistory();

  const data = useSelector(state => state.Admin.approvedDoctors);

  const [emailEdit, setEmailEdit] = useState();
  const [nameEdit, setnameEdit] = useState();
  const [phoneEdit, setphoneEdit] = useState();
  const [locationEdit, setLocation] = useState();
  const [educationEdit, setEducation] = useState();
  const [feeEdit, setFee] = useState();
  const [specialityEdit, setSpeciality] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [postsPerPage] = useState(5);
  let List;
  
  const notification = useSelector(state => state.Admin.notification);
  
 
  useEffect(() => {
    dispatch(getApprovedDoctors())
   
  }, [dispatch]
  )


  const deletehandler = (e) => {
    dispatch(deleteApprovedDoctor(e.target.value))
    setShow(true);
  }

  const emailChange = (event) => {
    setEmailEdit(event.target.value);
  }

  const nameChange = (event) => {
    setnameEdit(event.target.value);
  }

  const phoneChange = (event) => {
    setphoneEdit(event.target.value)
  }

  const locationChange = (event) => {
    setLocation(event.target.value)
  }

  const educationChange = (event) => {
    setEducation(event.target.value)
  }

  const feeChange = (event) => {
    setFee(event.target.value)
  }

  const specialityChange = (event) => {
    setSpeciality(event.target.value)
  }


  const edithandler = (e) => {
    const id = e.target.value;
    const user = {
      email: emailEdit,
      name: nameEdit,
      phone: phoneEdit,
      location: locationEdit,
      education: educationEdit,
      fee: feeEdit,
      speciality: specialityEdit
    };
  
    dispatch(editDoctor(user, id))
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
        <tr key={user._id}>
          <td>
            <form>
              <input
                type="text"
                onChange={emailChange}
                defaultValue={user.email}
                className="text-center"
              />
            </form>
          </td>

          <td>
            <input
              type="text"
              onChange={nameChange}
              defaultValue={user.name}
              className="text-capitalize text-center"
            />
          </td>

          <td>
            <input
              type="text"
              onChange={phoneChange}
              defaultValue={user.phone}
              className=" text-center"
            />
          </td>

          <td>
            <input
              type="text"
              onChange={locationChange}
              defaultValue={user.location}
              className=" text-center"
            />
          </td>

          <td>
            <input
              type="text"
              onChange={educationChange}
              defaultValue={user.education}
              className="text-center"
            />
          </td>
          <td>
            <input
              type="text"
              onChange={feeChange}
              defaultValue={user.fee}
              className=" text-center"
            />
          </td>
          <td>
            <input
              type="text"
              onChange={specialityChange}
              defaultValue={user.speciality}
              className=" text-center"
            />
          </td>

          <td>
            <button value={user._id} onClick={edithandler} className="btn btn-success round-button btn-sm">
              {approveDoctor.button_name.edit}
            </button>
          </td>

          <td>
            <button value={user._id} onClick={deletehandler} className="btn btn-danger round-button btn-sm">
              {approveDoctor.button_name.delete}
            </button>
          </td>

        </tr>
      );
    });

  }
  return (
   <div>
    <div className="container text-center">
    <DashBoardItems />
    {show && 
         <AlertBox notifications={notification} onClick={()=> setShow(false)}/> }

     <h2 className="m-5 text-navy">{approveDoctor.title}</h2>
     
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
     
   </div>
   <Pagination postsPerPage={postsPerPage} totalPosts={dataLength}  paginate={paginate}/>
    
   <div className="mt-4">
   <ExportToExcel apiData={data} fileName="Doctors Data" /> 
     
   <button  className="btn btn-success round-button " onClick={() =>{history.push('/dashboard')}}>{approveDoctor.button_name.backToDashboard}</button>
   </div>
   </div>
   </div>

 
 )
}

export default ApprovedDoctors;