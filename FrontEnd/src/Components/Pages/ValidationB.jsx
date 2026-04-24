import React from "react";
import { useForm } from "react-hook-form";

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

const ValidationB = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" {...register("Age")} />
      <input type="submit" />
    </form>
    </div>
  )
}

export default ValidationB




















// import React from "react";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
//     <>
//       <label>{label}</label>
//       <select name={name} ref={ref}  onChange={onChange} onBlur={onBlur}>
//         <option value="Male">Male</option>
//         <option value="Female">Female</option>
//       </select>
//     </>
//   ));

// const schema = yup.object().shape({
//     // firstName: yup.string().required("First Name should be required please"),
//     name: yup.string().required(" Name should be required please").min(4),
//     email: yup.string().email().required("Email is required"),
//     location:yup.string().required("location is required").min(1).max(30),
//     phone: yup.string().required("Contact number  is required").max(10).min(10),
//     gender:yup.string().required("Gender is required"),
//     disease:yup.string(),
//     age: yup.number().positive().integer().required("Age is required").max(150),
//      password: yup.string().min(8).max(16).required("Password is required"),
//   });
  

// const ValidationB = () => {
//     const { register, handleSubmit, formState:{ errors } } = useForm({
//         resolver: yupResolver(schema)
//       });
//       const onSubmit = data => console.log(data);
    
//     return (
       
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input type="date" placeholder="Enter name" className="form-control mb-2" {...register("name")} />
//       <p>{errors.name?.message}</p>

//       <input  className="form-control mb-2" {...register("email")} />
//       <p>{errors.email?.message}</p>

//       <input  className="form-control mb-2" {...register("location")} />
//       <p>{errors.location?.message}</p>

//       <input  className="form-control mb-2" {...register("phone")} />
//       <p>{errors.phone?.message}</p>
//       <input  className="form-control mb-2" {...register("gender")} />
//       <p>{errors.gender?.message}</p>
//       <input  className="form-control mb-2" {...register("age")} />
//       <p>{errors.age?.message}</p>

//       <input  className="form-control mb-2" {...register("disease")} />
//       <p>{errors.disease?.message}</p>
//       <input  className="form-control mb-2" {...register("password")} />
//       <p>{errors.password?.message}</p>

//       <Select label="Gender" {...register("Gender")} />
//       <p>{errors.Gender?.message}</p>
//           <input  className="btn btn-primary" type="submit" id="submit" />
//         </form>
   
//     )
// }

// export default ValidationB




 




 
