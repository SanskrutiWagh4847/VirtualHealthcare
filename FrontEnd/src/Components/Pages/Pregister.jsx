import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../UI Components/Reused/Layout";
import AlertBox from "../../Profiles/Admin/Components/AlertBox";

import { Registers } from "../../Redux/Action/PatientAction/PatientAction";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
  gender: yup.string().required(),
  age: yup.number().required(),
  location: yup.string().required(),
  disease: yup.string(),
});

const Pregister = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.Patient.notification);

  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    dispatch(Registers({ ...data, role: "patient", flag: true }));
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

        <input className="form-control inp" placeholder="Age" {...register("age")} />
        <input className="form-control inp" placeholder="Location" {...register("location")} />
        <input className="form-control inp" placeholder="Disease" {...register("disease")} />

        <select className="form-control inp" {...register("gender")}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button type="submit" className="btn button">Register</button>
      </form>
    </Layout>
  );
};

export default Pregister;