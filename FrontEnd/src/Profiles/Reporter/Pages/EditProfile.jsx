import Input from "../../../Components/UI Components/FormControl/Input";
import Layout from "../../../Components/UI Components/Reused/Layout";
import { editprofile } from "../../../Redux/Action/ReporterAction/ReporterAction";
import { getUser } from "../../../Redux/Action/ReporterAction/ReporterAction";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import "../../Patient/Components/Css/PatientProfile.css";
import EditSVG from '../../../Assets/SVG/editp.svg'
import Modal from '../../../Components/UI Components/Modal/Modal'

export default function EditProfile(props) {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.Reporter.reporter);
  const id = useSelector((state) => state.Auth.profile._id);
  const notification=useSelector((state)=>state.Reporter.notification)
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

  const ageChange = (e) => {
    setAge(e.target.value);
  };
  const locationChange = (e) => {
    setLocation(e.target.value);
  };
  const diseaseChange = (e) => {
    setDisease(e.target.value);
  };

  const edithandler = () => {
    let payload = {
      name,
      email,
      phone,
      age,
      location,
      disease,
      gender,
    };

    console.log(payload);
    dispatch(editprofile(id, payload));
    
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-md-6">
          <img src={EditSVG} alt="edit " className='img-fluid'/>
        </div>
        <div className="col-10 col-md-6">
          <Layout>
            <Input
              type="text"
              label="Name"
              placeholder="Name"
              classNamelabel="form-label  text  fw-bold fst-italic  mt-3 "
              className="form-control mb-2 inp "
              defaultValue={name}
              value={name}
              onChange={nameChange}
            ></Input>

            <Input
              type="text"
              label="Email"
              placeholder="Email"
              classNamelabel="form-label  text  fw-bold fst-italic  mt-3 "
              className="form-control mb-2 inp"
              defaultValue={email}
              value={email}
              onChange={emailChange}
              readOnly={true}
            ></Input>

            <Input
              type="text"
              label="Phone No."
              placeholder="Phone No."
              classNamelabel="form-label  text  fw-bold fst-italic  mt-3 "
              className="form-control mb-2 inp "
              defaultValue={phone}
              value={phone}
              onChange={phoneChange}
            ></Input>
            <Input
              type="text"
              label="Gender"
              placeholder="Gender"
              className="form-control mb-2 inp "
              classNamelabel="form-label  text  fw-bold fst-italic  mt-3 "
              defaultValue={gender}
              readOnly={true}
            ></Input>
            <Input
              classNamelabel="form-label  text  fw-bold fst-italic  mt-3 "
              type="text"
              label="Age"
              placeholder="Age"
              className="form-control mb-2 inp "
              defaultValue={age}
              value={age}
              onChange={ageChange}
            ></Input>
            {props.show && (
              <Input
                classNamelabel="form-label  text  fw-bold fst-italic  mt-3 "
                type="text"
                label="Disease"
                placeholder="Disease"
                className="form-control mb-2 inp"
                defaultValue={disease}
                value={disease}
                onChange={diseaseChange}
              ></Input>
            )}

            <Input
              classNamelabel="form-label  text  fw-bold fst-italic  mt-3  "
              type="text"
              label="Location"
              placeholder="Location"
              className="form-control mb-2 inp "
              defaultValue={location}
              onChange={locationChange}
            ></Input>

            <button
              type="button"
              className="btn btn-primary inp"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={edithandler}
            >
              SAVE CHANGES
            </button>
          </Layout>
        </div>
      </div>
      <Modal notification={notification}></Modal>
    </div>
  );
}
