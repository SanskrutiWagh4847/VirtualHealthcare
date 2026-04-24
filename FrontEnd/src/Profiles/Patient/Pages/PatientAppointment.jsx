import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Checkbox from "../../../Components/UI Components/FormControl/Checkbox";
import bookappointment from "../../../Assets/SVG/bookappointment.svg";
import "../Components/Css/PatientAppointment.css"
import  {symptoms,Appointment} from '../Files/Appointmentfile'
import { CreateAppointment } from "../../../Redux/Action/PatientAction/PatientAction";

//import Modal from '../../../Components/UI Components/Modal/Modal'
import AlertBox from "../../Admin/Components/AlertBox";

const schema = yup.object().shape({
  date: yup.string().required("Please Select Appointment Date"),
  time: yup.string().required("Please Select Appointment Time"),
  disease: yup.string().required("Please Enter the Disease")
});

const PatientAppointment = () => {
   const [show, setshow] = useState(false)
  const Doctorprofile = useSelector((state) => state.Patient.DoctorById);

  const messagemodal = useSelector((state) => state.Patient.notification);


  const patientid = useSelector((state) => state.Auth.profile._id);
  const patientname = useSelector((state) => state.Auth.profile.name);

  const doctorId = Doctorprofile[0]._id;
  const doctorName = Doctorprofile[0].name;


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    const appointment = {
      doctorId: doctorId,
      doctorName: doctorName,
      patientId: patientid,
      patientName: patientname,
      symptoms: tempsymptoms,
      date: data.date,
      time: data.time,
      disease: data.disease
    };
    console.log(appointment);
     setshow(true)
    dispatch(CreateAppointment(appointment));
  };


  const dispatch = useDispatch();
  const tempsymptoms = [];
  const handlecheckboxchange = (e) => {
    if (e.target.checked) {
      tempsymptoms.push(e.target.value);
    } else {
      let index = tempsymptoms.indexOf(e.target.value);

      tempsymptoms.splice(index, 1);
    }

    console.log(tempsymptoms);
  };

  return (
    <>
<div className="container">    {show && <AlertBox notifications={messagemodal} onClick={()=> setshow(false)}/> }
      </div>
      <h1
        className="fw-bolder mt-4 text-center appointhead"  
      >
       {Appointment.Appointmentpagetitle}
      </h1>

      <div className="card mb-3 border-0 bg-transparent">
        <div className="row g-0">
          <div className="col-lg-5 ">
           <img
              src={bookappointment}
              className="img-thumbnail border-0 "
              alt="..."
            />
          </div>
          <div className="col-lg-7">
          
              <div className="card-body mt-4 me-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <input
                      type="date"
                      className="form-control mb-4 inp"
                      {...register("date")}
                    />
                    <p className=" fw-bold text-danger">{errors.date?.message}</p>

                    <input
                      type="time"
                      className="form-control mb-4 inp"
                      {...register("time")}
                    />
                    <p className=" fw-bold text-danger">{errors.time?.message}</p>
                  </div>
                  <input
                      type="text"
                      className="form-control mb-4 inp"
                      placeholder="Explain your problem in brief"
                      {...register("disease")}
                    />
                  {/* checkbox------------- */}

                  <div className="row   fs -3 text-start mb-2">
                    <div className=" col-4 col-xs-6 ">
                      <Checkbox
                        value={symptoms.sym1}
                        classNameLabel="custom-control-label fs-5 check"
                        onChange={handlecheckboxchange}
                        type="checkbox"
                        valuechk={symptoms.sym1}
                        classNameInput="custom-control-input form-check-input me-2 "
                      ></Checkbox>
                    </div>

                    <div className=" col-4 col-xs-6">
                      <Checkbox
                        value={symptoms.sym2}
                        classNameLabel="custom-control-label fs-5 check"
                        onChange={handlecheckboxchange}
                        type="checkbox"
                        valuechk={symptoms.sym2}
                        classNameInput="custom-control-input form-check-input me-2 "
                      ></Checkbox>
                    </div>
                    <div className=" col-4 col-xs-6">
                      <Checkbox
                        value={symptoms.sym3}
                        classNameLabel="custom-control-label fs-5 check"
                        onChange={handlecheckboxchange}
                        type="checkbox"
                        valuechk={symptoms.sym3}
                        classNameInput="custom-control-input form-check-input me-2 "
                      ></Checkbox>
                    </div>
                  </div>

                  <div className="row text-start mb-2">
                    <div className=" col-4 col-xs-6">
                      <Checkbox
                        value={symptoms.sym4}
                        classNameLabel="custom-control-label fs-5 check"
                        onChange={handlecheckboxchange}
                        type="checkbox"
                        valuechk={symptoms.sym4}
                        classNameInput="custom-control-input form-check-input me-2 "
                      ></Checkbox>
                    </div>
                    <div className=" col-4 col-xs-6">
                      <Checkbox
                        value={symptoms.sym5}
                        classNameLabel="custom-control-label fs-5 check"
                        onChange={handlecheckboxchange}
                        type="checkbox"
                        valuechk={symptoms.sym5}
                        classNameInput="custom-control-input form-check-input me-2 "
                      ></Checkbox>
                    </div>
                    <div className=" col-4 col-xs-6">
                      <Checkbox
                        value={symptoms.sym6}
                        classNameLabel="custom-control-label fs-5 check"
                        onChange={handlecheckboxchange}
                        type="checkbox"
                        valuechk={symptoms.sym6}
                        classNameInput="custom-control-input form-check-input me-2 "
                      ></Checkbox>
                    </div>
                  </div>

                  <div className="row text-start mb-2  ">
                    <div className=" col-4 col-xs-6">
                      <Checkbox
                        value={symptoms.sym7}
                        classNameLabel="custom-control-label fs-5 check"
                        onChange={handlecheckboxchange}
                        type="checkbox"
                        valuechk={symptoms.sym7}
                        classNameInput="custom-control-input form-check-input me-2 "
                      ></Checkbox>
                    </div>
                    <div className=" col-4 col-xs-6">
                      <Checkbox
                        value={symptoms.sym8}
                        classNameLabel="custom-control-label fs-5 check"
                        onChange={handlecheckboxchange}
                        type="checkbox"
                        valuechk={symptoms.sym8}
                        classNameInput="custom-control-input form-check-input me-2 "
                      ></Checkbox>
                    </div>
                    <div className=" col-4 col-xs-6">
                      <Checkbox
                        value={symptoms.sym9}
                        classNameLabel="custom-control-label fs-5 check"
                        onChange={handlecheckboxchange}
                        type="checkbox"
                        valuechk={symptoms.sym9}
                        classNameInput="custom-control-input form-check-input me-2 "
                      ></Checkbox>

                     
                    </div>
                  </div>

                  <input
                    className="btn button mt-4"
                    type="submit"
                    id="submit"
                 
                  />

                </form>
              </div>
       
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientAppointment;
