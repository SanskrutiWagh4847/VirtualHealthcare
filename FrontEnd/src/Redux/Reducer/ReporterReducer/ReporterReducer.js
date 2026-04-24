import { TODAY_APPOINTMENTS,AVAILIBAL_DOCTORS,RESHEDUAL_APPOINTMENT,LEAVE_DOCTORS 
,DOCTORS_INFO,PATIENTS_INFO,USER_DETAILS,NOTIFICATION} from "../../Action/ReporterAction/ReporterAction";


const ReportorData={
    todayappointments:null,
    avaiableDoctors:[],
    leaveDoctors:[],
    doctorInfo:null,
    reporter:[],
    rebookId:"" ,
    notification:''
  
}


const ReporterReducer=(state=ReportorData,action)=>{
    if(action.type===TODAY_APPOINTMENTS){
        return{...state,
            todayappointments:action.payload,
           
        }
    }
    if(action.type===AVAILIBAL_DOCTORS){
        return{...state,
            avaiableDoctors:action.payload,
           
        }
    }
    if(action.type===RESHEDUAL_APPOINTMENT){
        return{...state,
            rebookId:action.payload,
         
            
        }
    }
    if(action.type===LEAVE_DOCTORS){
        return{...state,
            leaveDoctors:action.payload,
           
            
        }
    }
    if(action.type===DOCTORS_INFO){
        return{...state,
            doctorInfo:action.payload,
           
        }
       
    }
    if(action.type===PATIENTS_INFO){
        return{...state,
            patientInfo:action.payload,
         
        }
       
    }
    if(action.type===USER_DETAILS){
        return{...state,
            reporter:action.payload        
        }       
    }
    if(action.type===NOTIFICATION){
        return{...state,
            notification:action.payload        
        }       
    }
 
    return state;
    
 }

 export default ReporterReducer;