
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postQuery } from '../../Redux/Action/AdminAction/AdminAction'
import ContactUs from "../../Assets/SVG/ContactUs.svg";

import AlertBox from "../../Profiles/Admin/Components/AlertBox";



function Contactus() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setmessage] = useState("");

  const notification = useSelector(state => state.Doctor.notification);
  const [show, setShow] = useState(false);

 
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setmessage(event.target.value);
  };

  const handleName = (event) =>{
    setName(event.target.value);
  }

  const Quryhandler = () => {
    const user = {
      name: name,
      email: email,
      message: message
    };
    dispatch(postQuery(user))
    setShow(true);
  }


  return (
    <div className="m-4 p-4">
      <h1 className="text-navy text-center">HAVE SOME QUESTIONS?</h1>
     
      <div className="row">
   
        <div className="col col-md-6 col-12">
        <img src={ContactUs} className="d-block w-100 what-img" alt="..." />

        </div>
        <div className="col col-md-6 col-12">
        {show &&  <AlertBox notifications={notification} onClick={()=> setShow(false)}/> }
   
        <input lable='name' className="form-control mb-3 inp" onChange={handleName} value={name} type='text' placeholder='Name'></input>
      <input lable='Email' className="form-control mb-3 inp" onChange={handleEmail} value={email} type='text' placeholder='Email' ></input>
      <textarea lable='Meassge' className="form-control mb-3 inp" onChange={handleMessage} value={message} type='password' placeholder='QUESTION'></textarea>
      <button onClick={Quryhandler} className="btn button btn-primary mt-3 mb-3" >Submit</button>

      </div>
      </div> 
    </div>
  )
}

export default Contactus;