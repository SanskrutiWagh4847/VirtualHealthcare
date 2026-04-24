// import axios from 'axios';
// // export const PATIENT_CREATE = "PATIENT_CREATE"
// export const patient_VIEW= "patient_VIEW"
// export const edit =  (user,id) => {
//   return   (dispatch) => {
//       axios.patch('http://localhost:5000/api/user/'+id,user)
//         .then(function (res) {
//           console.log("edit");
//           console.log(res);
//           console.log(res.email);
//           console.log(res.name);
          
//           //dispatch(print(res));
//           dispatch(getAdmin());
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//   };
// };

// export const getAdmin = ()=>{
// return  (dispatch) => {
//  axios.get('http://localhost:5000/api/user/')
// .then(function (response) {
//   console.log(response.data);
//   dispatch(viewAdmin(response.data))
// })
// .catch(function (error) {
//   console.log(error);
// })
// .then(function () {
// });
// };
// } 

// export const viewAdmin = (payload) => {

// return {
//     type: patient_VIEW,
//     payload
// }
// }

// // export const registerpatient = (payload) => {
  
// //   return {
// //       type: PATIENT_CREATE,
// //       payload
// //   }
// // }

// // export const Registers =  (patient) => {
// //     return   (dispatch) => {
// //         axios.post('http://localhost:5000/api/users/',patient)
// //           .then(function (res) {
// //             console.log("post");
// //             console.log(res);
// //             console.log(res.data.data);
// //               // console.log(res.data.name);
            
// //             dispatch(registerpatient(res.data.data));
// //           })
// //           .catch(function (error) {
// //             console.log(error);
// //           });
// //     };
// //   };

//   // export const Loginn =  (Patient) => {
//   //   return   (dispatch) => {
//   //       axios.post('http://localhost:5000/api/user/login',Patient)
//   //         .then(function (res) {
//   //           console.log("post login");
//   //           console.log(res);
           
//   //             // console.log(res.data.name);
            
//   //           dispatch(loginpatient(true));
//   //         })
//   //         .catch(function (error) {
//   //           console.log(error);
//   //         });
//   //   };
//   // };
  
 

//   // export const Loginn =  (Patient) => {
//   //   return   (dispatch) => {
//   //       axios.post('http://localhost:5000/api/user/login',Patient)
      
//   //       .then(res=> {
//   //     console.log("login data")
//   //         console.log(res);
//   //         console.log(res.data.data);
//   //         if(res.data.status === 200) {
            
        
//   //         dispatch(loginpatient(res.data.data))
//   //          console.log("Login succsessfull: "+res.data.role)
//   //          window.alert("Login succsessfull: "+res.data.message)
//   //         }
//   //         else {
//   //           window.alert(res.data.message)
//   //         }
//   //       })
      
        
//         // .then(response=>{
//         //     console.log(response);
//         //     // set token into local storage in application 
//         //     dispatch(loginpatient(response))
//         // }) 
//         // .catch(function (error) {
//         //   console.log(error);
//         // });     
        
//   //       };
//   // };
  

 
// //   export const Loginn= (user) => {
// //     return (dispatch) => {
// //         fetch('http://localhost:5000/api/user/login', {
// //             method:'POST',
// //             headers: {
// //                 'content-type': 'application/json'
// //             },
// //             body: JSON.stringify(user)
// //         })
       
// //         .then(response=>{
// //             console.log(response);
// //             // set token into local storage in application 
       
// //             dispatch(loginpatient(response))
// //         })

// //     }
// // }


// //   export const edit =  (user,id) => {
// //     return   (dispatch) => {
// //         axios.patch('http://localhost:5000/api/admin/'+id,user)
// //           .then(function (res) {
// //             console.log("edit");
// //             console.log(res);
// //             console.log(res.email);
// //             console.log(res.name);
            
// //             //dispatch(print(res));
// //             dispatch(getAdmin());
// //           })
// //           .catch(function (error) {
// //             console.log(error);
// //           });
// //     };
// //   };

// //   export const deleteid =  (id) => {
// //     return   (dispatch) => {
// //         axios.delete('http://localhost:5000/api/admin/'+ id)
// //           .then(function (res) {
// //             console.log(res);
// //             dispatch(getAdmin());
            
// //           })
// //           .catch(function (error) {
// //             console.log(error);
// //           });
// //     };
// //   };




// //very use
// // import axios from 'axios';
// // export const ADMIN = "ADMIN"
// // export const ADMIN_VIEW = "ADMIN_VIEW"





// //  export const print = (payload) => {
  
// //     return {
// //         type: ADMIN,
// //         payload
// //     }
// // }



// // export const viewAdmin = (payload) => {
  
// //   return {
// //       type: ADMIN_VIEW,
// //       payload
// //   }
// // }


// // export const getAdmin = ()=>{
// //   return  (dispatch) => {
// //    axios.get('http://localhost:5000/api/admin')
// //   .then(function (response) {
// //     console.log(response.data);
// //     dispatch(viewAdmin(response.data))
// //   })
// //   .catch(function (error) {
// //     console.log(error);
// //   })
// //   .then(function () {
// //   });
// //   };
// // } 

// // export const dummy =  (user) => {
// //     return   (dispatch) => {
// //         axios.post('http://localhost:5000/api/admin',user)
// //           .then(function (res) {
// //             console.log(res);
            
// //             dispatch(print(res));
// //           })
// //           .catch(function (error) {
// //             console.log(error);
// //           });
// //     };
// //   };

// //   export const edit =  (user,id) => {
// //     return   (dispatch) => {
// //         axios.patch('http://localhost:5000/api/admin/'+id,user)
// //           .then(function (res) {
// //             console.log(res);
            
// //             dispatch(print(res));
// //           })
// //           .catch(function (error) {
// //             console.log(error);
// //           });
// //     };
// //   };

// //   export const deleteid =  (id) => {
// //     return   (dispatch) => {
// //         axios.delete('http://localhost:5000/api/admin/'+ id)
// //           .then(function (res) {
// //             console.log(res);
            
// //           })
// //           .catch(function (error) {
// //             console.log(error);
// //           });
// //     };
// //   };