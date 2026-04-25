import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../UI Components/Reused/Layout";
import AlertBox from "../../Profiles/Admin/Components/AlertBox";

import { Doctorregister } from "../../Redux/Action/DoctorAction/DoctorLoginAction";

const Select = React.forwardRef(({ onChange, onBlur, name }, ref) => (
  <select className="form-select inp" name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
));

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
  gender: yup.string().required(),
  age: yup.number().required(),
  education: yup.string().required(),
  hospital: yup.string().required(),
  speciality: yup.string().required(),
  fee: yup.number().required(),
  location: yup.string().required(),
});

const Dregister = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.Doctor.notification);

  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    dispatch(Doctorregister({ ...data, role: "doctor" }));
    setShow(true);
  };

  return (
    <Layout>
      {show && <AlertBox notifications={notification} onClick={() => setShow(false)} />}

      <form onSubmit={handleSubmit(onSubmit)} className="row g-3">

        <input className="form-control inp" placeholder="Name" {...register("name")} />
        <input className="form-control inp" placeholder="Email" {...register("email")} />
        <input className="form-control inp" placeholder="Phone" {...register("phone")} />
        <input className="form-control inp" placeholder="Password" {...register("password")} />

        <Select {...register("gender")} />

        <input className="form-control inp" placeholder="Age" {...register("age")} />
        <input className="form-control inp" placeholder="Hospital" {...register("hospital")} />
        <input className="form-control inp" placeholder="Location" {...register("location")} />
        <input className="form-control inp" placeholder="Education" {...register("education")} />
        <input className="form-control inp" placeholder="Speciality" {...register("speciality")} />
        <input className="form-control inp" placeholder="Fee" {...register("fee")} />

        <button type="submit" className="btn button">Register</button>
      </form>
    </Layout>
  );
};

export default Dregister;