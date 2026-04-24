import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuries,deleteQueryAction } from '../../../Redux/Action/AdminAction/AdminAction'
import ResponseForm from '../Components/ResponseForm'
import Pagination from '../../../Components/Pagination/Pagination';
import {useHistory} from 'react-router'
import AlertBox from '../Components/AlertBox';
import {ExportToExcel} from '../Components/ExportToExcel';
import { inquiryFile, button_name, table_heading} from '../Files/InquiryFile';


function ViewQueries() {

  const [userdata, setUserData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const history = useHistory();
  const data = useSelector(state => state.Admin.queries);
  let List;
  
  const notification = useSelector(state => state.Admin.notification);
 

  useEffect(
    () => {
    }, [userdata]
  )

  useEffect(
    () => {
      dispatch(getQuries())
    }, [dispatch]
  )

  const deleteQuery = (e) => {
    dispatch(deleteQueryAction(e.target.value))
    setShow(true)
  }

  function handleEmail(user) {
    setUserData(user)

    
}

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
let currentPosts, dataLength;
if (data) {
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
          {user.message}
        </td>

        <td>
          <button onClick={() => handleEmail(user)} className="btn btn-success round-button btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">{button_name.sendResponse}</button>
        </td>
        <td>
          <button value={user._id} onClick={deleteQuery} className="btn btn-danger round-button btn-sm">
           {button_name.delete}
          </button>
        </td>
      </tr>
    );
  });
}



  return (
    <div className="container text-center">
      {show && <AlertBox notifications={notification} onClick={()=> setShow(false)}/>   }
           

      <h2  className="m-5 text-navy">{inquiryFile.title}</h2>
    
      <div className="collapse" id="collapseExample">
        
          <ResponseForm data={userdata} />
      
      </div>
      <div className="container">
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
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={dataLength} paginate={paginate} />
      
      <ExportToExcel apiData={data} fileName="List of inquiries" /> 
     
      <button  className="btn btn-success  round-button" onClick={() =>{history.push('/dashboard')}}>{button_name.backToDashboard}</button>
   
    </div>
    </div>
  )
}

export default ViewQueries;