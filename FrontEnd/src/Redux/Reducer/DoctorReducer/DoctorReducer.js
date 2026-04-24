
import { DOCTOR_CREATE } from "../../Action/AppointmentAction/DoctorLoginAction";
import { TODAY_APPOINTMENTS, HISTORY_APPOINTMENTS, UPCOMING_APPOINTMENTS, VIEW_DOCTORBYID, DOCTORPROFILE_EDIT,USER_DETAILS,  NOTIFICATION } from "../../Action/DoctorAction/DoctorAction";


const Doctorlogin = {

  Doctor: [],
  doctor: [],
  TodayAppointments: [],
  HistoryAppointments: [],
  UpcomingAppointments:[],

  id: null,
  name: null,
  email: null,
  phone: null,
  hospital: null,
  speciality: null,
  fee: null,
  education: null,
  location: null,
  gender: null,
  age: null,
  notification:null,


}

const DoctorReducer = (state = Doctorlogin, action) => {
  if (action.type === DOCTOR_CREATE) {
    return {
      ...state,

      Doctor: action.payload

    }
  }

  if (action.type === VIEW_DOCTORBYID) {
    return {
      ...state,

      id: action.payload._id,
      name: action.payload.name,
      phone: action.payload.phone,
      location: action.payload.location,
      gender: action.payload.gender,
      email: action.payload.email,
      age: action.payload.age,
      hospital: action.payload.hospital,
      speciality: action.payload.speciality,
      fee: action.payload.fee,
      education: action.payload.education,

    };
  }
  if (action.type === DOCTORPROFILE_EDIT) {
    return {
      ...state,

      location: action.payload.location,
      phone: action.payload.phone,
      age: action.payload.age,
      hospital: action.payload.hospital,
      fee: action.payload.fee,
      education: action.payload.education,
      speciality: action.payload.speciality,
      
    };
  }


  if (action.type === TODAY_APPOINTMENTS) {
    return {
      ...state,
      TodayAppointments: action.payload
    }
  }

  if (action.type === HISTORY_APPOINTMENTS) {
    return {
      ...state,

      HistoryAppointments: action.payload

    }
  }

  if (action.type === UPCOMING_APPOINTMENTS) {
    return {
      ...state,

      UpcomingAppointments: action.payload

    }
  }

  if(action.type===USER_DETAILS){
    return{...state,
        doctor:action.payload        
    }       
}

if(action.type === NOTIFICATION){
  return{...state,
      notification: action.payload,
     
  }
}

return state;
}





export default DoctorReducer;