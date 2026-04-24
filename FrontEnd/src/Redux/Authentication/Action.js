import axios from 'axios';
export const NOTIFICATION = "NOTIFICATION";
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const login = (payload) => {
  
    return {
        type: LOGIN,
        payload
    }

  }


  export const Logout = (payload) => {
     return{
       type : LOGOUT,
       payload
     }
  }

  export const notification = (payload) => {
    return {
      type: NOTIFICATION,
      payload
    };
  };




export const Loginn =  (payload) => {
    return   (dispatch) => {
        axios.post('http://localhost:5000/api/users/login',payload)
      
        .then(res=> {
    //   console.log("login data")
          // console.log(res);
          console.log(res.data.doc);
          if(res.data.status === 201) {
        
          dispatch(login(res.data.doc))
           console.log("Login succsessfull: "+res.data.role)
          //  const notify = "Login succsessfull!!";        
          //  dispatch(notification(notify));
        //    window.alert("Login succsessfull: "+res.data.message)
            
         localStorage.setItem("user",JSON.stringify(res.data.doc))
        //  console.log(res.data)
        window.location.reload(false);
          }
          else {
            const notify = res.data.message 
           dispatch(notification(notify));
            // window.alert(res.data.message)
          }
        })
        
        };
  };

  export const getUser = (id) => {
    return (dispatch) => {
      axios
        .get("http://localhost:5000/api/users/" + id)
        .then(function (res) {
          console.log(res);
          dispatch(login(res.data.doc));
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  };