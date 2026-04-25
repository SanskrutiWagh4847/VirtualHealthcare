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




export const Loginn = (payload) => {
  return (dispatch) => {
    axios.post(
      'https://virtualhealthcare-1.onrender.com/api/users/login',
      payload
    )
    .then(res => {
      console.log(res.data);

      if (res.data.status === 201) {
        dispatch(login(res.data.doc));

        localStorage.setItem("user", JSON.stringify(res.data.doc));

        window.location.reload(false);
      } else {
        dispatch(notification(res.data.message));
      }
    })
    .catch(err => {
      console.log("Login error:", err);
      dispatch(notification("Server error or API not reachable"));
    });
  };
};

  export const getUser = (id) => {
  return (dispatch) => {
    axios
      .get("https://virtualhealthcare-1.onrender.com/api/users/" + id)
        .then(function (res) {
          console.log(res);
          dispatch(login(res.data.doc));
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  };