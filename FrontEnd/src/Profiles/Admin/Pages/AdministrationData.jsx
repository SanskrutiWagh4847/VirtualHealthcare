import React from 'react'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { administrationFile, button_name, table_heading } from '../Files/AdministrationFile';
import { getAdministrationData, deleteAdministrationData, editAdministrationData, createAdminData } from '../../../Redux/Action/AdminAction/AdminAction'
import Pagination from '../../../Components/Pagination/Pagination';
import {ExportToExcel} from '../Components/ExportToExcel';
import Input from '../../../Components/UI Components/FormControl/Input';
import AlertBox from '../Components/AlertBox';


const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
        <label>{label}</label>
        <select className="  form-select inp" name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select>
    </>
));

const SelectRole = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
        <label>{label}</label>
        <select className="  form-select inp" name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option value="reporter">Reporter</option>
            <option value="admin">Admin</option>
        </select>
    </>
));


const schema = yup.object().shape({

    name: yup.string().required("Name should be required please").min(4),
    email: yup.string().email().required("Email is required"),
    phone: yup.string().required("Contact number  is required").max(10).min(10),
    password: yup.string().min(8).max(16).required("Password is required"),
    gender: yup.string().min(1).required("Gender is required"),
    role: yup.string().min(1).required("Role is required")


});



function AdministrationData() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.Admin.users);

    const [emailEdit, setEmailEdit] = useState();
    const [nameEdit, setnameEdit] = useState();
    const [phoneEdit, setphoneEdit] = useState();
    const [roleEdit, setRole] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [show, setShow] = useState(false);
    const [postsPerPage] = useState(5);
    var List;

    const notification = useSelector(state => state.Admin.notification);

    useEffect(
        () => {
            dispatch(getAdministrationData())
        }, [dispatch]
    )



    const deletehandler = (e) => {
        dispatch(deleteAdministrationData(e.target.value))
        setShow(true)
    }

    const emailChange = (event) => {
        setEmailEdit(event.target.value);
    }

    const nameChange = (event) => {
        setnameEdit(event.target.value);
    }

    const phoneChange = (event) => {
        setphoneEdit(event.target.value)
    }

    const roleChange = (event) => {
        setRole(event.target.value)
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    
    const onSubmit = data => {
        console.log(data);
        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,

            gender: data.gender,
            role: data.role,
            flag: true

        };
        dispatch(createAdminData(user))
        console.log(user)
        setShow(true)
    }
   
    const edithandler = (e) => {
        const id = e.target.value;
        const user = {
            email: emailEdit,
            name: nameEdit,
            phone: phoneEdit,
            role: roleEdit


        };
        setShow(true);
        dispatch(editAdministrationData(user, id))
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts, dataLength;
    if (data) {
        currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
        dataLength = data.length;
    }
    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    if (data) {
     List = currentPosts.map((user) => {
            return (
                <tr key={user._id}>
                    <td>
                        <Input
                            type="text"
                            onChange={emailChange}
                            defaultValue={user.email}
                            className="text-center"
                        />
                    </td>

                    <td>
                        <Input
                            type="text"
                            onChange={nameChange}
                            defaultValue={user.name}
                            className="text-center text-capitalize"
                        />
                    </td>

                    <td>
                        <Input
                            type="text"
                            onChange={phoneChange}
                            defaultValue={user.phone}
                            className="text-center text-capitalize"
                        />
                    </td>

                    <td>
                        <Input
                            type="text"
                            onChange={roleChange}
                            defaultValue={user.role}
                            className="text-capitalize text-center"
                        />
                    </td>

                    <td>
                        <button value={user._id} onClick={edithandler} className="btn btn-success round-button btn-sm">
                            {button_name.edit}
                        </button>
                    </td>
                    <td>
                        <button value={user._id} onClick={deletehandler} className="btn btn-danger  round-button btn-sm">
                            {button_name.delete}
                        </button>
                    </td>
                </tr>
            );
        });

    }


    return (
        <div className="container text-center">
            {show && <AlertBox notifications={notification} onClick={() => setShow(false)} />}
            <h2 className="mt-5 text-navy">{administrationFile.title}</h2>

            <button className="btn btn-success round-button btn-sm m-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                {button_name.add_new_data}
            </button>

            <div className="collapse" id="collapseExample">

                <div className="container">

                    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>

                        <div className="row">
                            <div className="col-8 mt-2 mx-auto">
                                <input type="text" placeholder=" Name" className="form-control inp" {...register("name")} />
                                <p className=" fw-bold text-danger">{errors.name?.message}</p>
                            </div>
                            <div className="col-8  mx-auto">
                                <input type="text" placeholder="Email" className="form-control inp" {...register("email")} />
                                <p className=" fw-bold text-danger">{errors.email?.message}</p>
                            </div>
                            <div className="col-8  mx-auto">
                                <input type="password" placeholder="Password" className="form-control inp" {...register("password")} />
                                <p className=" fw-bold text-danger">{errors.password?.message}</p>
                            </div>
                            <div className="col-8  mx-auto">
                                <Select {...register("gender")} />
                                <p className=" fw-bold text-danger">{errors.gender?.message}</p>
                            </div>
                            <div className="col-8  mx-auto">
                                <SelectRole {...register("role")} />
                                <p className=" fw-bold text-danger">{errors.role?.message}</p>
                            </div>


                            <div className="col-8 mx-auto">
                                <input type="text" placeholder="Phone" className="form-control inp" {...register("phone")} />
                                <p className=" fw-bold text-danger">{errors.phone?.message}</p>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <input className="btn  button" type="submit" id="submit" />
                                <input className="btn  button" type="reset" id="reset" />

                                <input type="button" className="btn m-3 button" value="Back" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></input>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container mt-2">
                <div className="table-responsive" >
                    <table className="table tablesheet">
                        <thead>
                            <tr>
                                <th>{table_heading.heading1}</th>
                                <th>{table_heading.heading2}</th>
                                <th>{table_heading.heading3}</th>
                                <th>{table_heading.heading4}</th>
                                <th>{table_heading.heading5}</th>
                                <th>{table_heading.heading6}</th>
                            </tr>
                        </thead>
                        <tbody>{List}</tbody>
                    </table>

                </div>
                <div className="container" >
                    <Pagination postsPerPage={postsPerPage} totalPosts={dataLength} paginate={paginate} />
                    <ExportToExcel apiData={data} fileName="Administration Data" /> 
                </div>
            </div>
        </div>
    )
}

export default AdministrationData;