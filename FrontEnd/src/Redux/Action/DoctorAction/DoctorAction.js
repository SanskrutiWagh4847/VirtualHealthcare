
import axios from "axios";
export const HISTORY_APPOINTMENTS = "HISTORY_APPOINTMENTS";
export const UPCOMING_APPOINTMENTS = "UPCOMING_APPOINTMENTS";
export const TODAY_APPOINTMENTS = "TODAY_APPOINTMENTS";
export const VIEW_DOCTORBYID = "VIEW_DOCTORBYID";
export const DOCTORPROFILE_EDIT = "DOCTORPROFILE_EDIT";
export const USER_DETAILS="USER_DETAILS";
export const NOTIFICATION = "NOTIFICATION";

export const viewtodayAppointments = (payload) => {
  return {
    type: TODAY_APPOINTMENTS,
    payload,
  };
};

export const getTodayAppointmentbyid = (id) => {
  return (dispatch) => {
    axios
      .get(" http://localhost:5000/api/appointment/doctor/today/" +id)
      .then(function (response) {
        console.log(response.data);
        dispatch(viewtodayAppointments(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};



export const viewhistoryAppointments = (payload) => {
  return {
    type: HISTORY_APPOINTMENTS,
    payload,
  };
};

export const viewupcomingAppointments = (payload) => {
  return {
    type: UPCOMING_APPOINTMENTS,
    payload,
  };
};

export const getHistoryAppointmentbyid = (id) => {
  return (dispatch) => {
    axios
      .get(" http://localhost:5000/api/appointment/doctor/history/" +id)
      .then(function (response) {
        console.log(response.data);
        dispatch(viewhistoryAppointments(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const getUpcomingAppointmentbyid = (id) => {
  return (dispatch) => {
    axios
      .get(" http://localhost:5000/api/appointment/doctor/upcoming/" +id)
      .then(function (response) {
        console.log(response.data);
        dispatch(viewupcomingAppointments(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};



export const updatestatusbyId = (id, payload) => {
  return (dispatch) => {
    axios
      .patch(" http://localhost:5000/api/users/" +id, payload)
      .then(function (response) {
        const notify = "Status updated successfully";        
        dispatch(notification(notify));
        console.log(response.data);
        // dispatch(viewtodaysAppointments(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const DoctorById = (id) => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/users/" + id)
      .then(function (response) {
        console.log(response);
        console.log(response.data[0]);
        console.log(response.data[0].name);
        var t = response.data[0];
        dispatch(viewpp(t));
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

export const viewpp = (payload) => {
  return {
    type: VIEW_DOCTORBYID,
    payload,
  };
};


export const profileedit = (id, user) => {
  return (dispatch) => {
    axios
      .patch("http://localhost:5000/api/users/" + id, user)
      .then(function (res) {
        console.log(res);
        const notify = "Data updated sucessfully";        
        dispatch(notification(notify));
        dispatch(doctorprofileedit(res.data.doc));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const doctorprofileedit = (payload) => {
  return {
    type: DOCTORPROFILE_EDIT,
    payload,
  };
};

export const notification = (payload) => {
  return {
    type: NOTIFICATION,
    payload
  };
};




export const AddPrescrips = (id, prescription) => {
  return (dispatch) => {
    axios
      .patch("http://localhost:5000/api/appointment/" +id, prescription)
      .then(function (res) {
        const notify = "Prescription given, Thank You!!";        
        dispatch(notification(notify));
        console.log("Prescription given");

        //  dispatch(getTodayAppointmentbyid(res.data.data));
      })

      .catch(function (error) {
        console.log(error);
      });
  };
};