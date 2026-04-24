import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import React ,{useState} from "react";
// import { editprofile } from "../../../Redux/Action/ReporterAction/ReporterAction";
import { getUser } from "../../Redux/Action/ReporterAction/ReporterAction";
import { useSelector, useDispatch } from "react-redux";
import editp from '../../../src/Assets/SVG/editp.svg'

import Layout from "../UI Components/Reused/Layout";
import { useEffect } from "react";
import "../../Profiles/Doctor/Pages/Css/DoctorProfile.css";
import { doctorprofile } from "../../Profiles/Doctor/File/DoctorProfileFile";


const schema = yup.object().shape({
 
    name: yup.string().min(4),
    email: yup.string().email(),
    phone: yup.string().max(10).min(10),
    gender: yup.string() ,
    age: yup.number().positive().integer().max(150),
     password: yup.string().min(8).max(16),
  
     location:yup.string().required("location is required").min(1).max(30),
     disease:yup.string()
  });
  
const Newupdate = () => {
      const dispatch = useDispatch();

  const profile = useSelector((state) => state.Reporter.reporter);
  const id = useSelector((state) => state.Auth.profile._id);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();

  const [location, setLocation] = useState();
  const [disease, setDisease] = useState();

  useEffect(() => {
    dispatch(getUser(id));

    setEmail(profile.email);
    setName(profile.name);
    setPhone(profile.phone);
    setAge(profile.age);
    setGender(profile.gender);
    setLocation(profile.location);
    setDisease(profile.disease);
  }, [
    dispatch,
    profile.email,
    profile.gender,
    profile.phone,
    id,
    profile.name,
    profile.age,
    profile.location,
    profile.disease,
  ]);

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  const genderChange = (e) => {
    setGender(e.target.value);
  };

  const ageChange = (e) => {
    setAge(e.target.value);
  };
  const locationChange = (e) => {
    setLocation(e.target.value);
  };
  const diseaseChange = (e) => {
    setDisease(e.target.value);
  };

 

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {console.log(data);
    let payload = {
      name:data.name,
      email:data.email,
      phone:data.phone,
      age:data.age,
      location:data.location,
      disease:data.disease,
      gender:data.gender,
    };
    console.log(payload);
    //dispatch(editprofile(id, payload));
  }


  return (
      <>
       <div className="container">

       <h1 className="fw-bolder mt-4 shad mb-3 text-center" >
          {" "}
         {doctorprofile.update}{" "}
        </h1>
        <div clasName="row g-1">
      <div clasName="col-md-5 me-auto">
        <img src={editp} clasName="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-6 ">
       <Layout>
       <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
         <div className="col-12">
            <input type="text"  defaultValue={name} onChange={nameChange} placeholder=" Name" className="form-control inp" {...register("name")} />
      <p className=" fw-bold text-danger">{errors.name?.message}</p>
            </div>
            <div className="col-6">
            <input type="text" value={gender} onChange={genderChange} className="form-control inp" {...register("gender")} />
      <p className=" fw-bold text-danger">{errors.gender?.message}</p>
            </div>
            <div className="col-6">
            <input type="number" value={age} onChange={ageChange} className="form-control inp" {...register("age")} />
      <p className=" fw-bold text-danger">{errors.age?.message}</p>
            </div>
            <div className="col-6">
            <input type="number" value={phone} onChange={phoneChange} className="form-control inp" {...register("phone")} />
      <p className=" fw-bold text-danger">{errors.phone?.message}</p>
            </div>
            <div className="col-md-6">
            <input type="text" value={email} onChange={emailChange} className="form-control inp" {...register("email")} />
      <p className=" fw-bold text-danger">{errors.email?.message}</p>
            </div>
  
            <div className="col-md-6">
            <input type="text" value={disease} onChange={diseaseChange} className="form-control inp" {...register("disease")} />
      <p className=" fw-bold text-danger">{errors.disease?.message}</p>
            </div>
            <div className="col-md-4">
            <input type="text" value={location} onChange={locationChange} className="form-control inp" {...register("location")} />
      <p className=" fw-bold text-danger">{errors.location?.message}</p>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
            </div>
            <div className="col-12 text-center">
            <input  className="btn btn-primary mt-3 mb-4 button" type="submit" id="submit" />
            </div>
            </form>
            </Layout>
            </div>
            </div>



      
      </div>

        
      
   
     
    
</>
)
}

export default Newupdate