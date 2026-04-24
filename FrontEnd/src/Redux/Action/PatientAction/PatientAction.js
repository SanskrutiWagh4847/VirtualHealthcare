import axios from "axios";

export const PATIENT_CREATE = "PATIENT_CREATE";
export const ERR_CREATE = "ERR_CREATE";
export const VIEW_AVAILABLEDOCTOR = "VIEW_AVAILABLEDOCTOR";
export const VIEW_DOCTORBYID = "VIEW_DOCTORBYID";
export const APPOINTMENT_CREATE = "APPOINTMENT_CREATE";
export const VIEW_PATIENTAPPOINTMENTS = "VIEW_PATIENTAPPOINTMENTS";
export const GETHISTORY_APPOINTMENT = "GETHISTORY_APPOINTMENT";
export const GETUPCOMING_APPOINTMENT = "GETUPCOMING_APPOINTMENT";
export const GETTODAYS_APPOINTMENT = "GETTODAYS_APPOINTMENT";


export const PATIENT_NOTIFICATION = "PATIENT_NOTIFICATION";
export const PATIENTPROFILE_EDIT = "PATIENTPROFILE_EDIT";

export const notification = (payload, Role) => {
  return {
    type: PATIENT_NOTIFICATION,
    payload,
    Role,
  };
};

export const updateRating = (id,rate) => {
  return (dispatch) => {
    axios
      .patch(" http://localhost:5000/api/users/" + id,rate)
      .then(function (response) {
        // console.log(response);

        const Message = "Rating Submitted ";
        const Role = "Rating patient";
        dispatch(notification(Message, Role));
       
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};




export const Todaysappointment = (payload) => {
  return {
    type: GETTODAYS_APPOINTMENT,
    payload,
  };
};


export const getTodayAppointmentbyid= (id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/appointment/patient/today/" + id)
      .then(function (response) {
        // console.log(" patient get TODAYS APPOINTMENT BY ID");
        // console.log(response.data);
       

        dispatch(Todaysappointment(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
     
  };
};






export const Upcomingappointment = (payload) => {
  return {
    type: GETUPCOMING_APPOINTMENT,
    payload,
  };
};


export const getUpcomingAppointmentbyid= (id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/appointment/patient/upcoming/" + id)
      .then(function (response) {
        // console.log(" patient get Upcoming Appointment byid ");
        // console.log(response.data);
     

        dispatch(Upcomingappointment(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
     
  };
};






export const historyappointment = (payload) => {
  return {
    type: GETHISTORY_APPOINTMENT,
    payload,
  };
};


export const getHistoryAppointmentbyid= (id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/appointment/patient/history/" + id)
      .then(function (response) {
        // console.log(" patient get History Appointment by id ");
        // console.log(response.data);
     

        dispatch(historyappointment(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
     
  };
};

export const registerpatient = (payload) => {
  return {
    type: PATIENT_CREATE,
    payload,
  };
};

export const regerr = (payload) => {
  return {
    type: ERR_CREATE,
    payload,
  };
};

export const Registers = (patient) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/users/", patient)
      .then(function (res) {
        // console.log(" patient post");
        // console.log(" Registers patient");
        // console.log(res);
        // console.log(res.data.message);
        const Message = "Sucessfully Registered ";
        const Role = "Register Patient";
        dispatch(notification(Message, Role));

        dispatch(registerpatient(res.data.data));
        dispatch(regerr(res.data.message));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const createappointment = (payload) => {
  return {
    type: APPOINTMENT_CREATE,
    payload,
  };
};

export const CreateAppointment = (appointment) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/appointment/", appointment)
      .then(function (res) {
        // console.log(" patient CreateAppointment ");
        // console.log(res.data.data);
         const Message = "Appointment Booked ";
        const Role = "Appointment";
        dispatch(notification(Message, Role));
        dispatch(createappointment(res.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};







export const DoctorById = (id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/users/" + id)
      .then(function (response) {
        // console.log("patient DoctorById ");
        // console.log(response.data);

        dispatch(viewDoctorById(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const viewDoctorById = (payload) => {
  return {
    type: VIEW_DOCTORBYID,
    payload,
  };
};

export const DoctorAvailable = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/patient/availableDoctors")
      .then(function (response) {
        // console.log(" patient DoctorAvailable ");
        // console.log(response.data.available);
        
        dispatch(viewAvailableDoctor(response.data.available));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const viewAvailableDoctor = (payload) => {
  return {
    type: VIEW_AVAILABLEDOCTOR,
    payload,
  };
};
