

import {
  ERR_CREATE,
  VIEW_AVAILABLEDOCTOR,
  VIEW_DOCTORBYID,
  PATIENT_NOTIFICATION,
  APPOINTMENT_CREATE,
  PATIENT_CREATE,
 
 
  GETHISTORY_APPOINTMENT,GETUPCOMING_APPOINTMENT,GETTODAYS_APPOINTMENT
} from "../../Action/PatientAction/PatientAction";

const Patientlogin = {
  Patient: [],
  DoctorById: [],
  AvailableDoctor: [],
err:null,
  CreateAppointment: [],
  AllAppointments: [],
  AllHistoryAppointments:[],
  AllUpcomingAppointments:[],
  notification:null
 
};

const PatientReducer = (state = Patientlogin, action) => {
  if (action.type === PATIENT_CREATE) {
    return {
      ...state,
      Patient: action.payload,
    };
  }
  if(action.type === PATIENT_NOTIFICATION){
    return{...state,
        notification: action.payload,
        notoficationRole: action.Role

    }
}

  if (action.type === ERR_CREATE) {
    return {
      ...state,
      err: action.payload,
    };
  }
  if (action.type === GETHISTORY_APPOINTMENT) {
    return {
      ...state,
      AllHistoryAppointments: action.payload,
    };
  }
  if (action.type === GETUPCOMING_APPOINTMENT) {
    return {
      ...state,
      AllUpcomingAppointments: action.payload,
    };
  }

  if (action.type === APPOINTMENT_CREATE) {
    return {
      ...state,
      CreateAppointment: action.payload,
    };
  }

  if (action.type === VIEW_AVAILABLEDOCTOR) {
    return {
      ...state,
      AvailableDoctor: action.payload,
    };
  }

  if (action.type === VIEW_DOCTORBYID) {
    return {
      ...state,
      DoctorById: action.payload,
    };
  }

  if (action.type === GETTODAYS_APPOINTMENT) {
    return {
      ...state,
      AllAppointments: action.payload,
    };
  }

  return state;
};

export default PatientReducer;
