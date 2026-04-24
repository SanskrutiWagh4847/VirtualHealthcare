import axios from "axios";

export const ADMIN_VIEW = "ADMIN_VIEW";
export const VIEW_PATIENT = "VIEW_PATIENT";
export const VIEW_APPROVE_DOCTORS = "VIEW_APPROVE_DOCTORS";
export const VIEW_PENDING_DOCTORS = "VIEW_PENDING_DOCTORS";
export const VIEW_UPCOMING_APPOINTMENTS = "VIEW_UPCOMING_APPOINTMENTS";
export const VIEW_APPOINTMENT_HISTORY = "VIEW_APPOINTMENT_HISTORY";
export const VIEW_QUERY = "VIEW_QUERY";
export const NOTIFICATION = "NOTIFICATION";

export const viewAdmin = (payload) => {
  return {
    type: ADMIN_VIEW,
    payload,
  };
};

export const notification = (payload) => {
  return {
    type: NOTIFICATION,
    payload
  };
};

export const viewPatient = (payload) => {
  return {
    type: VIEW_PATIENT,
    payload,
  };
};

export const viewApprovedDoctors = (payload) => {
  return {
    type: VIEW_APPROVE_DOCTORS,
    payload,
  };
};

export const viewPendingDoctors = (payload) => {
  return {
    type: VIEW_PENDING_DOCTORS,
    payload,
  };
};

export const viewUpcomingAppointments = (payload) => {
  return {
    type: VIEW_UPCOMING_APPOINTMENTS,
    payload,
  };
};

export const viewAppointmentHistory = (payload) => {
  return {
    type: VIEW_APPOINTMENT_HISTORY,
    payload,
  };
};

export const viewQuery = (payload) => {
  return {
    type: VIEW_QUERY,
    payload,
  };
};

//approve or reject doctors

export const getPendingDoctors = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/admin/pendingDoctors")
      .then(function (response) {
        console.log(response.data);
        dispatch(viewPendingDoctors(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const approveDoctorAction = (user, id) => {
  return (dispatch) => {
    axios
      .patch("http://localhost:5000/api/users/" + id, user)
      .then(function (res) {
        const notify = "Doctor has been approved!!";        
        dispatch(notification(notify));
        dispatch(getPendingDoctors());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const rejectDoctorAction = (id) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:5000/api/users/" + id)
      .then(function (res) {
        const notify = "Doctor has been rejected !!";
        dispatch(notification(notify));
        dispatch(getPendingDoctors());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// list of all approved doctors

export const getApprovedDoctors = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/admin/getDoctors")
      .then(function (response) {
       
        dispatch(viewApprovedDoctors(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const editDoctor = (user, id) => {
  return (dispatch) => {
    axios
      .patch("http://localhost:5000/api/users/" + id, user)
      .then(function (res) {
        console.log(res.data.success);
        const notify = "Doctor data has been updated successfully";
        dispatch(notification(notify));
        dispatch(getApprovedDoctors());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteApprovedDoctor = (id) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:5000/api/users/" + id)
      .then(function (res) {
       
        dispatch(notification(res.data.success));
        dispatch(getApprovedDoctors());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// get patients

export const getPatients = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/admin/getPatients")
      .then(function (response) {
        console.log(response.data);

        dispatch(viewPatient(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const editPatients = (user, id) => {
  return (dispatch) => {
    axios
      .patch("http://localhost:5000/api/users/" + id, user)
      .then(function (res) {
        console.log(res.data.success);
        const notify="Patient data updated successfully"
        dispatch(notification(notify));
        dispatch(getPatients());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deletePatients = (id) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:5000/api/users/" + id)
      .then(function (res) {
        const notify="Patient has been deleted successfully"
        dispatch(notification(notify));
        dispatch(getPatients());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

//Queries
export const getQuries = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/contact")
      .then(function (response) {
        console.log(response.data);
        dispatch(viewQuery(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const deleteQueryAction = (id) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:5000/api/contact/" + id)
      .then(function (res) {
        
        const notify = "Inquiry has been deleted successfully";
        dispatch(notification(notify));
        dispatch(getQuries());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postQuery = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/contact", user)
      .then(function (res) {
        const notify = "Response has been sent successfully";
        const data = "inquiry";
        dispatch(notification(notify, data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// Past Appointments
export const getAppointmentsHistory = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/appointment/history")
      .then(function (response) {
        console.log(response.data);
        dispatch(viewAppointmentHistory(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const deleteAppointmentHistoryAction = (id) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:5000/api/appointment/" + id)
      .then(function (res) {
        const notify = "Appointment deleted successfully";
        dispatch(notification(notify));
        dispatch(getAppointmentsHistory());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// Upcoming Appointments
export const getUpcomingAppointments = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/appointment/upcoming")
      .then(function (response) {
        console.log(response.data);
        dispatch(viewUpcomingAppointments(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const deleteUpcomingAppointment = (id) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:5000/api/appointment/" + id)
      .then(function (res) {
        const notify = "Appointment deleted successfully";
        dispatch(notification(notify));
        dispatch(getUpcomingAppointments());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

//manage administration data

export const getAdministrationData = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/admin/administration")
      .then(function (response) {
        console.log(response.data);
        dispatch(viewAdmin(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
};

export const editAdministrationData = (user, id) => {
  return (dispatch) => {
    axios
      .patch("http://localhost:5000/api/users/" + id, user)
      .then(function (res) {
        console.log(res);
        const notify="Administration data updated successfully"
        dispatch(notification(notify));
        dispatch(getAdministrationData());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteAdministrationData = (id) => {
  return (dispatch) => {
    axios
      .delete("http://localhost:5000/api/users/" + id)
      .then(function (res) {
        dispatch(notification(res.data.success));
        dispatch(getAdministrationData());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const createAdminData = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/users", user)
      .then(function (res) {
      
        const notify = "New data added successfully";
        dispatch(notification(notify));
        dispatch(getAdministrationData());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
