
import {LOGIN, LOGOUT, NOTIFICATION} from './Action';
const Authentication=  {
    
    profile : [],
    notification:null,
   
    
  
   
   
}

const AuthReducer=(state=Authentication,action)=>{
    
    
    if(action.type=== LOGIN)
    {
        return{
         
            ...state,
            profile:action.payload
           
        
        }
    }

    if(action.type=== LOGOUT)
    {
        return{
         
            
            profile:[]
           
        
        }
    }
 

    if(action.type === NOTIFICATION){
        return{...state,
            notification: action.payload,
           
        }
    }
 
    return state;
 }


export default AuthReducer;