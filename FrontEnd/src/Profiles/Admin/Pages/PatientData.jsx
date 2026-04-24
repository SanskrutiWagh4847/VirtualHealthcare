import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPatients, deletePatients, editPatients } from '../../../Redux/Action/AdminAction/AdminAction'
import Pagination from '../../../Components/Pagination/Pagination';
import Input from '../../../Components/UI Components/FormControl/Input';
import Submit from '../../../Components/UI Components/Button/Submit'
import { useHistory } from 'react-router'
import AlertBox from '../Components/AlertBox';
import {ExportToExcel} from '../Components/ExportToExcel';
import {patientfile, table_heading, button_name} from '../Files/PatientFile'

function PatientData() {

  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector(state => state.Admin.patients);
  const [emailEdit, setEmailEdit] = useState();
  const [nameEdit, setnameEdit] = useState();
  const [phoneEdit, setphoneEdit] = useState();
  const [locationEdit, setLocation] = useState();
  const [diseaseEdit, setDisease] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const [postsPerPage] = useState(5);
  let List;
  
  const notification = useSelector(state => state.Admin.notification);
  
  
  useEffect(
    () => {
      dispatch(getPatients())
    }, [dispatch]
  )


  const deletehandler = (e) => {
    dispatch(deletePatients(e.target.value))
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

  const diseaseChange = (event) => {
    setDisease(event.target.value)
  }

  const edithandler = (e) => {
    const id = e.target.value;
    const user = {
      email: emailEdit,
      name: nameEdit,
      phone: phoneEdit,
      location: locationEdit,
      disease: diseaseEdit
    };
   
    dispatch(editPatients(user, id))
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
            <Input
              type="text"
              onChange={emailChange}
              defaultValue={user.email}
              className=" text-center"
            />
          </td>

          <td>
            <Input
              type="text"
              onChange={nameChange}
              defaultValue={user.name}
              className="text-capitalize text-center"
              
            />
          </td>

          <td>
            <Input
              type="text"
              onChange={phoneChange}
              defaultValue={user.phone}
              className=" text-center"
            />
          </td>

          <td>
            <Input
              type="text"
              onChange={locationChange}
              defaultValue={user.location}
              className=" text-center"
            />
          </td>

          <td>
            <Input
              type="text"
              onChange={diseaseChange}
              defaultValue={user.disease}
              className=" text-center"
            />
          </td>

          <td>
            <button value={user._id} onClick={edithandler} className="btn btn-success round-button btn-sm">
              {button_name.edit}
            </button>
          </td>
          <td>
            <button value={user._id} onClick={deletehandler} className="btn btn-danger round-button btn-sm">
              {button_name.delete}
            </button>
          </td>
        </tr>
      );
    });

  }


  return (
    <div className="container text-center">
        {show && <AlertBox notifications={notification} onClick={()=> setShow(false)}/>}
   

    
    <div>
      <h2 className="m-5 text-navy">{patientfile.title}</h2>
      <div className="table-responsive">
        <table className="table tablesheet ">
          <thead>
            <tr>
              
              <th>{table_heading.heading1}</th>
              <th>{table_heading.heading2}</th>
              <th>{table_heading.heading3}</th>
              <th>{table_heading.heading4}</th>
              <th>{table_heading.heading5}</th>
              <th>{table_heading.heading6}</th>
              <th>{table_heading.heading7}</th>
            </tr>
          </thead>
          <tbody>{List}</tbody>
        </table>

      </div>
      <div className="container" >
        <Pagination postsPerPage={postsPerPage} totalPosts={dataLength} paginate={paginate} />
     </div>
     
    </div>
    <ExportToExcel apiData={data} fileName="Patient Data" /> 
    <Submit  className="btn btn-success round-button" onClick={() =>{history.push('/dashboard')}} title={button_name.backToDashboard}></Submit>
   
    </div>
  )
}

export default PatientData;