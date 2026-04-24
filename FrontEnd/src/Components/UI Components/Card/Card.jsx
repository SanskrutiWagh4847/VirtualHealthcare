import React from "react";
import { useDispatch } from "react-redux";

import {Link} from "react-router-dom";
import { DoctorById } from "../../../Redux/Action/PatientAction/PatientAction";

import ButtonLink from '../Card/ButtonLink'
const Card = (props) => {
const dispatch = useDispatch()

const Doctorbyid =(id)=>{
  dispatch(DoctorById(id))
  console.log(id);
}

  
  return (
    <>
   
        <div className =" m-0 col-sm col-xs-12 mb-4">
    <div className="card justify-content-around" style= {{width: "18rem"}}>
        <div className="card-body " style={{ textAlign: "center" }}>
          <h5 className="card-title">{props.name}</h5>
        </div>
        <ul className=" list-group list-group-flush">
          <li className="list-group-item">{props.education}</li>
          <li className="list-group-item">{props.email}</li>
          <li className="list-group-item">{props.phone}</li>
          <li className="list-group-item">{props.id}</li>
        
        </ul>
        <div className="card-body">
      
          <ButtonLink  onClick={() => Doctorbyid(props.id) } className="btn mt-4 btn-outline-primary rounded "><Link to='/PDoctorProfile'>View Profile</Link></ButtonLink>
                                                          
           <ButtonLink onClick={() => Doctorbyid(props.id) } className="btn mt-4 btn-outline-primary rounded "><Link to='/PatientAppointment'>Book Appontmnet</Link></ButtonLink>
                                                            
        

   
               
              </div>
        
             </div>

      </div>

      
    </>
  );
};

export default Card
