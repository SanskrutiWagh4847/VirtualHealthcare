import PatientNav from '../../Profiles/Patient/Components/PatientNavBar';
import DoctorNav from '../../Profiles/Doctor/Components/DoctorNavBar';
import ReporterNav from '../../Profiles/Reporter/Components/ReporterNavBar';
import AdmintNav from '../../Profiles/Admin/Components/AdminNavBar';
import NavBar from './NavBar';
import {useDispatch } from 'react-redux';
import { login } from '../../Redux/Authentication/Action';


function MainNavigation () {
    var main = true
    var admin = false
    var patient = false
    var doctor = false
    var reporter = false

 var dispatch = useDispatch()
    var user = JSON.parse(localStorage.getItem("user")) 

      console.log (user)

      if(user){
        var role = user.role
        dispatch(login(user))
      }
    
    
     
      console.log(role)
    if (role === "admin") {admin = true 
        main =false}
    if (role ==="patient") {patient =true 
        main =false}
    if (role ==="doctor") {doctor =true 
        main =false}
    if (role ==="reporter") {reporter =true 
        main =false}
    if (role) main =false


    return (
        <>
       {main && <NavBar></NavBar>}
       {patient &&<PatientNav></PatientNav>}
       {doctor && <DoctorNav></DoctorNav>}
       {reporter && <ReporterNav></ReporterNav>}
       {admin && <AdmintNav></AdmintNav>}
       </>
    )
}

export default MainNavigation;