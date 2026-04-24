import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loginn } from "../../Redux/Authentication/Action";
import Layout from "../UI Components/Reused/Layout";
import Input from "../UI Components/FormControl/Input";
import Submit from "../UI Components/Button/Submit";
import { Link } from "react-router-dom";
import onlinelogin from '../../Assets/Images/onlinelogin.gif'
import '../Pages/css/login.css'
import AlertBox from "../../Profiles/Admin/Components/AlertBox";

const Login = (props) => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const notification = useSelector(state => state.Auth.notification);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    const Patient = {
      email,
      password,
    };
    dispatch(Loginn(Patient));
    setShow(true);
  
    setPassword(event.target.value);
  };

  
  return (
    <>
    <div className="card container border-0 bg-transparent mb-3">
  <div className="row g-0">
    <div className="col-md-5">
      <img src={onlinelogin} className="img-fluid rounded-start" alt="..."/>
    </div>

    <div className="col-md-6 logininput align-self-center">
      <div className="card-body ">
        <h3 className="text-navy text-center">Login here to explore more!</h3>
        {show && 
         <AlertBox notifications={notification} onClick={()=> setShow(false)}/> }
      <Layout >
        <Input
          className=" form-control  inp mb-2"
          label="Email"
          placeholder="Email"
          type="Email"
          onChange={handleEmailChange}
        ></Input>

        <Input
          className="form-control  inp mb-2"
          label="Password"
          placeholder="Password"
          type="password"
          onChange={handlePasswordChange}
        ></Input>
  <div className="row justify-content-center">
    <div className="col-auto">
        <Submit
          className="btn mt-4 btn-outline-primary button "
          onClick={handleLogin}
          type="button"
          title="Login"
        ></Submit>
        </div>
<div className="col-auto">
        <Link className="nav-link" to="/SignUp">
          <Submit type="button" className="btn button mt-3" title="Sign Up"></Submit>            
        </Link>
        </div>
        </div>
      </Layout>

      </div>
    </div>
  </div>
</div>
     
    </>
  );
};

export default Login;
