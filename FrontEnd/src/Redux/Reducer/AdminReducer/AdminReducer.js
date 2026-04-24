import { ADMIN_VIEW, VIEW_PATIENT, VIEW_APPROVE_DOCTORS, VIEW_PENDING_DOCTORS, VIEW_UPCOMING_APPOINTMENTS, VIEW_APPOINTMENT_HISTORY, VIEW_QUERY, NOTIFICATION} from "../../Action/AdminAction/AdminAction";

const Admin=  {
    
    users:null,
    patients:[],
    approvedDoctors:[],
    pendingDoctors:[],
    upcomingAppointments:[],
    appointmentHistory: [],
    queries: [],
    notification:null,
  
 
}

const AdminReducer=(state=Admin,action)=>{
  
    if(action.type===ADMIN_VIEW){
        return{...state,
            users:action.payload
        }
    }

    if(action.type ===VIEW_PATIENT){
        return{...state,
            patients:action.payload
        }
    }

    if(action.type === VIEW_APPROVE_DOCTORS){
        return{...state,
            approvedDoctors: action.payload

        }
    }

    if(action.type === VIEW_PENDING_DOCTORS){
        return{...state,
            pendingDoctors: action.payload

        }
    }

    if(action.type === VIEW_UPCOMING_APPOINTMENTS){
        return{...state,
            upcomingAppointments: action.payload

        }
    }

    if(action.type === VIEW_APPOINTMENT_HISTORY){
        return{...state,
            appointmentHistory: action.payload

        }
    }

    if(action.type === NOTIFICATION){
        return{...state,
            notification: action.payload,
           
        }
    }

    if(action.type === VIEW_APPOINTMENT_HISTORY){
        return{...state,
            appointmentHistory: action.payload

        }
    }

    if(action.type === VIEW_QUERY){
        return{...state,
             queries: action.payload

        }
    }

  
 
 
    return state;
 }


export default AdminReducer;