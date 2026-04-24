import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {Doctorregister} from '../../Redux/Action/DoctorAction/DoctorLoginAction';
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from "../UI Components/Reused/Layout";
import AlertBox from "../../Profiles/Admin/Components/AlertBox";
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select className= "  form-select inp" name={name} ref={ref}  onChange={onChange} onBlur={onBlur}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </>
));
const schema = yup.object().shape({

  name: yup.string().required("Name should be required please").min(4),
  email: yup.string().email().required("Email is required"),
  location:yup.string().required("location is required").min(1).max(30),
  phone: yup.string().required("Contact number  is required").max(10).min(10),
  password: yup.string().min(8).max(16).required("Password is required"),
  gender: yup.string().min(1).required("Gender is required") ,
  age: yup.number().positive().integer().required("Age is required").max(150),
  education:yup.string().required("Education is required").max(30),
  hospital: yup.string().required("Hospital is required").max(30),
  speciality: yup.string().required("Speciality is required").max(30),
  fee:yup.number().positive().integer().required("Fee is required").max(150),
});

const Dregister = () => {

  const notification = useSelector(state => state.Doctor.notification);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch()
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => {console.log(data);
        const doctor = {
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
          age: data.age,
          gender: data.gender,
          role: "doctor",
          status: null,
          location: data.location,
          education: data.education,
          hospital: data.hospital,
          speciality: data.speciality,
          fee: data.fee,
          flag: false,

      };
      dispatch(Doctorregister(doctor));
      setShow(true)
      // window.location.reload(false);
  }

 

    return (
      <div>
        {show && 
         <AlertBox notifications={notification} onClick={()=> setShow(false)}/> }
      <Layout> 
          
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>

  <div className="col-12">
  <input type="text" placeholder=" Name"  className="form-control inp" {...register("name")} />
      <p className=" fw-bold text-danger">{errors.name?.message}</p>  </div>
  <div className="col-4">
  <Select {...register("gender")} />
      <p className=" fw-bold text-danger">{errors.Gender?.message}</p>
  </div>
  <div className="col-4">
  <input  placeholder=" Age"  className="form-control inp" {...register("age")} />
      <p className=" fw-bold text-danger">{errors.age?.message}</p>
  </div>
  <div className="col-4">
  <input  placeholder=" Phone"  className="form-control inp" {...register("phone")} />
      <p className=" fw-bold text-danger">{errors.phone?.message}</p>
  </div>
  <div className="col-md-6">
  <input placeholder=" Email" className="form-control inp" {...register("email")} />
      <p className=" fw-bold text-danger">{errors.email?.message}</p>
  </div>
  <div className="col-md-6">
  <input placeholder=" Password"  type="password" className="form-control inp" {...register("password")} />
      <p className=" fw-bold text-danger">{errors.password?.message}</p>
  </div>
  <div className="col-md-6">
  <input placeholder=" Hospital Name"   className="form-control inp" {...register("hospital")} />
      <p className=" fw-bold text-danger">{errors.hospital?.message}</p>
  </div>
  <div className="col-md-4">
  <input  placeholder="Hospital Location"  className="form-control inp" {...register("location")} />
      <p className=" fw-bold text-danger">{errors.location?.message}</p>
  </div>

  <div className="col-md-4">
  <input  placeholder="Education"  className="form-control inp" {...register("education")} />
      <p className=" fw-bold text-danger">{errors.education?.message}</p>
  </div>
  <div className="col-md-4">
  <input  placeholder="Speciality"  className="form-control inp" {...register("speciality")} />
      <p className=" fw-bold text-danger">{errors.speciality?.message}</p>
  </div>
  <div className="col-md-4">
  <input  placeholder="Consulting Fee"  className="form-control inp" {...register("fee")} />
      <p className=" fw-bold text-danger">{errors.fee?.message}</p>
  </div>
   <div className="col-12 text-center">
   <input  className="btn mt-4 button" type="submit" id="submit" /> 
   <input  className="btn mt-4 button" type="Reset" id="reset" />  </div>
  
   
</form>
</Layout> 
</div>
    )
}

export default Dregister

