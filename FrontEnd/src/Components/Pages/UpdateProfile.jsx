import React from "react";
import { useState } from "react";
import { profileedit } from "../../../Redux/Action/DoctorAction/DoctorAction";
import { DoctorById } from "../../../Redux/Action/DoctorAction/DoctorAction";
import { useSelector, useDispatch } from "react-redux";
import editp from '../../../Assets/SVG/editp.svg'
// import Submit from "../../../Components/UI Components/Button/Submit";
import Input from "../../../Components/UI Components/FormControl/Input";
import Layout from "../../../Components/UI Components/Reused/Layout";
// import Layout from "../../../Components/UI Components/Reused/Layout";
import { useEffect } from "react";
import "../Pages/Css/DoctorProfile.css";
import { doctorprofile } from "../File/DoctorProfileFile";

function UpdateProfile() {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.Auth.profile._id);
    // const loginpro = useSelector((state) => state.Auth.profile);
    const dname = useSelector((state) => state.Doctor.name);
    const dphone = useSelector((state) => state.Doctor.phone);
    const dlocation = useSelector((state) => state.Doctor.location);
    const dgender = useSelector((state) => state.Doctor.gender);
    const demail = useSelector((state) => state.Doctor.email);
    const dage = useSelector((state) => state.Doctor.age);
    const dhospital = useSelector((state) => state.Doctor.hospital);
    const dspeciality = useSelector((state) => state.Doctor.speciality);
    const dfee = useSelector((state) => state.Doctor.fee);
    const deducation = useSelector((state) => state.Doctor.education);
    // const did = useSelector((state) => state.Doctor.id);
  
    //   console.log(loginpro);
    //   console.log(dname);
    //   console.log(dage);
  
    console.log(dname);
  
    useEffect(() => {
      dispatch(DoctorById(id));
    });
  
    const [nameEdit] = useState();
    const [phoneEdit, setphoneEdit] = useState();
    const [locationEdit, setlocationEdit] = useState();
    const [genderEdit] = useState();
    const [emailEdit] = useState();
    const [ageEdit, setageEdit] = useState();
    const [hospitalEdit, sethospitalEdit] = useState();
    const [specialityEdit, setspecialityEdit] = useState();
    const [feeEdit, setfeeEdit] = useState();
    const [educationEdit, seteducationEdit] = useState();
  
    const phoneChange = (event) => {
      setphoneEdit(event.target.value);
    };
  
    const locationChange = (event) => {
      setlocationEdit(event.target.value);
    };
  
    const ageChange = (event) => {
      setageEdit(event.target.value);
    };
  
    const hospitalChange = (event) => {
      sethospitalEdit(event.target.value);
    };
  
    const feeChange = (event) => {
      setfeeEdit(event.target.value);
    };
  
    const educationChange = (event) => {
      seteducationEdit(event.target.value);
    };
  
    const specialityChange = (event) => {
      setspecialityEdit(event.target.value);
    };
  
    const edithandler = (e) => {
      if (locationEdit === undefined) {
        var loc = dlocation;
      } else {
        loc = locationEdit;
      }
  
      if (phoneEdit === undefined) {
        var phoned = dphone;
      } else {
        phoned = phoneEdit;
      }
  
      if (ageEdit === undefined) {
        var aged = dage;
      } else {
        aged = ageEdit;
      }
  
      if (hospitalEdit === undefined) {
        var hospitald = dhospital;
      } else {
        hospitald = hospitalEdit;
      }
      if (feeEdit === undefined) {
        var feed = dfee;
      } else {
        feed = feeEdit;
      }
      if (educationEdit === undefined) {
        var educationd = deducation;
      } else {
        educationd = educationEdit;
      }
      if (specialityEdit === undefined) {
        var specialityd = dspeciality;
      } else {
        specialityd = specialityEdit;
      }
  
      const user = {
        phone: phoned,
        age: aged,
        hospital: hospitald,
        location: loc,
        fee: feed,
        education: educationd,
        speciality: specialityd,
      };
      dispatch(profileedit(id, user));
    };
  
    const handleview = () => {
      dispatch(DoctorById(id));
    };
  
    return (
  
  <div className="container">
        <h1 className="fw-bolder mt-4 shad mb-3 text-center" >
          {" "}
         {doctorprofile.update}{" "}
        </h1>
  
      
    <div class="row g-1">
      <div class="col-md-5 me-auto">
        <img src={editp} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-6 ">
       
        <Layout>
          <form className="row g-3">
            <div className="col-12">
              <Input
                type="text"
                className="form-control inp"
                defaultValue={dname}
                readOnly="true"
                value={nameEdit}
                placeholder="Name"
                label={doctorprofile.doctor_name}
              />
            </div>
            <div className="col-6">
              <Input
                type="text"
                className="form-control inp"
                defaultValue={dgender}
                value={genderEdit}
                readOnly="true"
                placeholder="Gender"
                label={doctorprofile.doctor_gender}
              />
            </div>
            <div className="col-6">
              <Input
                type="text"
                className="form-control inp"
                defaultValue={dage}
                value={ageEdit}
                onChange={ageChange}
                placeholder="Age"
                label={doctorprofile.doctor_age}
              />
            </div>
            <div className="col-6">
              <Input
                type="text"
                className="form-control inp"
                defaultValue={dphone}
                value={phoneEdit}
                onChange={phoneChange}
                placeholder="Phone no."
                label={doctorprofile.doctor_phone}
              />
            </div>
            <div className="col-md-6">
              <Input
                type="email"
                className="form-control inp"
                placeholder="Email"
                label={doctorprofile.doctor_email}
                defaultValue={demail}
                value={emailEdit}
                readOnly="true"
              />
            </div>
  
            <div className="col-md-6">
              <Input
                type="text"
                className="form-control inp"
                placeholder="Hospital Name"
                label={doctorprofile.doctor_hospital}
                defaultValue={dhospital}
                value={hospitalEdit}
                onChange={hospitalChange}
              />
            </div>
            <div className="col-md-4">
              <Input
                type="text"
                className="form-control inp"
                label={doctorprofile.doctor_location}
                placeholder="Hospital Location"
                defaultValue={dlocation}
                value={locationEdit}
                onChange={locationChange}
              />
            </div>
            <div className="col-md-4">
              <Input
                type="text"
                className="form-control inp"
                label={doctorprofile.doctor_education}
                placeholder="Education"
                defaultValue={deducation}
                value={educationEdit}
                onChange={educationChange}
              />
            </div>
            <div className="col-md-4">
              <Input
                type="text"
                className="form-control inp"
                label={doctorprofile.doctor_speciality}
                placeholder="Speciality"
                defaultValue={dspeciality}
                value={specialityEdit}
                onChange={specialityChange}
              />
            </div>
            <div className="col-md-4">
              <Input
                type="text"
                className="form-control inp"
                label={doctorprofile.doctor_fee}
                placeholder="Consulting Fees"
                defaultValue={dfee}
                value={feeEdit}
                onChange={feeChange}
              />
            </div>
            <div className="col-12 text-center">
              <button
                type="button"
                className="btn btn-primary mt-3 mb-4 button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={edithandler}
              >
                {doctorprofile.doctor_changes}
              </button>
            </div>
          </form>
        </Layout>
        </div>
      </div>

  
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                 {doctorprofile.doctor_update}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
  
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleview}
                  data-bs-dismiss="modal"
                >
                 {doctorprofile.dclose}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default UpdateProfile
