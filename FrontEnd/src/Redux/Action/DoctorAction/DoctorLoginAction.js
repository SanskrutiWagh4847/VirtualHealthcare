import axios from 'axios';
export const DOCTOR_CREATE = "DOCTOR_CREATE"
export const NOTIFICATION = "NOTIFICATION";

export const registerdoctor = (payload) => {
  
  return {
      type: DOCTOR_CREATE,
      payload
  }
}

export const notification = (payload) => {
  return {
    type: NOTIFICATION,
    payload
  };
};


export const Doctorregister =  (doctor) => {
    return   (dispatch) => {
        axios.post('http://localhost:5000/api/users/',doctor)
          .then(function (res) {
            console.log("post");
            console.log(res);
            console.log(res.data.data);
              // console.log(res.data.name);
              
              const notify = "Registration succsessfull please wait for Approval Thank you!!"; 
              dispatch(notification(notify));
            dispatch(registerdoctor(res.data.data));
          })
          .catch(function (error) {
            console.log(error);
          });
    };
  };
