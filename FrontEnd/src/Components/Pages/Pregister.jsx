
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Layout from '../UI Components/Reused/Layout'
import './css/register.css'
import React,{useState} from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { Registers } from '../../Redux/Action/PatientAction/PatientAction'
import AlertBox from '../../Profiles/Admin/Components/AlertBox'

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
 
    name: yup.string().required(" Name should be required please").min(4),
    email: yup.string().email().required("Email is required"),
    location:yup.string().required("location is required").min(1).max(30),
    phone: yup.string().required("Contact number  is required").max(10).min(10),
    disease:yup.string(),
gender: yup.string().min(1).required("Gender is required") ,
    age: yup.number().positive().integer().required("Age is required").max(150),
     password: yup.string().min(8).max(16).required("Password is required"),
  });
  


const Pregister = () => {
  let errmsg = useSelector(state => state.Patient.err)
  console.log(errmsg)
  const [show, setshow] = useState(false)
 
  const messagemodal = useSelector((state) => state.Patient.notification);
 
  const dispatch= useDispatch()
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => {console.log(data);
        const patient = {
          name:data.name,
  email:data.email,
  password:data.password,
  phone:data.phone,
  age:data.age,
  gender:data.gender,
  role:"patient",
  location:data.location,
  disease:data.disease,
  flag: true,
        };
        console.log(patient);
      
      dispatch(Registers(patient))
      setshow(true)
      }

    return (
       <>
       {show && <AlertBox notifications={messagemodal} onClick={()=> setshow(false)}/> }
              <Layout>  
      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
   
        <div className="col-12">
      <input type="text" placeholder=" Name" className="form-control inp" {...register("name")} />
      <p className=" fw-bold text-danger">{errors.name?.message}</p>
      </div>
      <div className="col-md-6">
      <input placeholder=" Email" className="form-control inp" {...register("email")} />
      <p className=" fw-bold text-danger">{errors.email?.message}</p>
      {/* <p className=" fw-bold text-danger">{errmsg}</p> */}
     
      </div>
      <div className="col-md-6">
      <input  placeholder=" Location"  className="form-control inp" {...register("location")} />
      <p className=" fw-bold text-danger">{errors.location?.message}</p>
      </div>
      <div className="col-md-6">
      <input  placeholder=" Phone"  className="form-control inp" {...register("phone")} />
      <p className=" fw-bold text-danger">{errors.phone?.message}</p>
      </div>
     
      <div className="col-md-6">
      <input  placeholder=" Age"  className="form-control inp" {...register("age")} />
      <p className=" fw-bold text-danger">{errors.age?.message}</p>
      </div>
      <div className="col-md-6">
      <Select  {...register("gender")} />
      <p className=" fw-bold text-danger">{errors.Gender?.message}</p>
      </div>
      <div className="col-md-6">
      <input placeholder=" Major Disease"   className="form-control inp" {...register("disease")} />
      <p className=" fw-bold text-danger">{errors.disease?.message}</p>
      </div>
      <div className="col-md-12">
      <input placeholder=" Password" type="password"  className="form-control inp" {...register("password")} />
      <p className=" fw-bold text-danger">{errors.password?.message}</p>
      </div>

      <div className="col-12 text-center">
          <input  className="btn mt-4 button" type="submit" id="submit" />
          <input  className="btn mt-4 button" type="Reset" id="reset" />  
          </div>
        </form>
        </Layout>
         
</>       
    )
}

export default Pregister
