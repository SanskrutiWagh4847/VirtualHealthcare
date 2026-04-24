
import axios from "axios";
export const TODAY_APPOINTMENTS = "TODAY_APPOINTMENTS";
export const AVAILIBAL_DOCTORS="AVAILIBAL_DOCTORS";
export const LEAVE_DOCTORS="LEAVE_DOCTORS";
export const DOCTORS_INFO="DOCTORS_INFO";
export const PATIENTS_INFO="PATIENTS_INFO";
export const RESHEDUAL_APPOINTMENT="RESHEDUAL_APPOINTMENT";
export const USER_DETAILS="USER_DETAILS";
export const NOTIFICATION ='NOTIFICATION';



export const viewtodaysAppointments = (payload) => {
  return {
    type: TODAY_APPOINTMENTS,
    payload,
  };
};
export const notify = (payload) => {
  return {
    type: NOTIFICATION,
    payload,
  };
};

export const viewavaliableDoctors = (payload) => {
  return {
    type: AVAILIBAL_DOCTORS,
    payload,
  };
};
export const viewleaveDoctors = (payload) => {
  return {
    type: LEAVE_DOCTORS,
    payload,
  };
};

export const ViewdoctorsInfo = (payload) => {
 
  return {
    type:DOCTORS_INFO,
    payload,
  };
};

export const viewpatientInfo = (payload) => {
 
  return {
    type:PATIENTS_INFO,
    payload,
  };
};
export const getTodayAppointments = () => {
  return (dispatch) => {
    axios
      .get(" http://localhost:5000/api/appointment/todaysAppointments  ")
      .then(function (response) {
        console.log(response.data);
        dispatch(viewtodaysAppointments(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const getAvaiableDoctors = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/patient/availableDoctors")
      .then(function (response) {
        console.log(response.data.available);
        dispatch(viewavaliableDoctors(response.data.available));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const getLeaveDoctors = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/patient/leave")
      .then(function (response) {
        console.log(response.data.leave);
        dispatch(viewleaveDoctors(response.data.leave));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};


export const redhedualAppointmentId = (payload) => {
  return {
    type: RESHEDUAL_APPOINTMENT,
    payload,
  };
};

export const RebookAppointment=(id,payload)=>{
  
  return (dispatch) => {
    axios
      .patch("http://localhost:5000/api/appointment/"+id,payload)
      .then(function (response) {
        console.log(response);
        dispatch(getTodayAppointments());
        dispatch(notify("Appointment Reshedual Succsessfully!!"))
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  
}

export const getDoctorsInfo = (id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/users/"+id)
      .then(function (response) {
        console.log(response.data);
        dispatch(ViewdoctorsInfo(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};


export const userDetails = (payload) => {
  return {
    type: USER_DETAILS,
    payload,
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/users/" + id)
      .then(function (res) {
        console.log(res.data);
        dispatch(userDetails(res.data[0]));
       
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const editprofile = (id,payload) => {
  return (dispatch) => {
    axios
      .patch("http://localhost:5000/api/users/"+id,payload)
      .then(function (response) {
        console.log(response.data);
        dispatch(notify(response.data.success))
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};