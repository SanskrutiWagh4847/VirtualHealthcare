import axios from 'axios';
export const DOCTOR_CREATE = "DOCTOR_CREATE"

export const registerdoctor = (payload) => {
  
  return {
      type: DOCTOR_CREATE,
      payload
  }
}


export const Doctorregister =  (doctor) => {
    return   (dispatch) => {
        axios.post('http://localhost:5000/api/users/',doctor)
          .then(function (res) {
            console.log("post");
            console.log(res);
            console.log(res.data.data);
              // console.log(res.data.name);
            
            dispatch(registerdoctor(res.data.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    };
  };
