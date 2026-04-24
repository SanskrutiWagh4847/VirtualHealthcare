import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import ProfileCard from '../../../Components/UI Components/Card/Profilecardd'
import { getUser } from "../../../Redux/Action/ReporterAction/ReporterAction";
import profileEdit from '../../../Assets/Images/profileEdit.gif'
export default function ViewProfile(){

    const profile = useSelector((state) => state.Reporter.reporter);
    const id= profile._id
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(id))
      }, [dispatch,id])
    return(
     <>
       <div class="card mb-3  container border-0 bg-transperant" >
  <div class="row g-4 justify-content-center">
    <div class=" col-10 col-md-6">
      <img src={profileEdit} class="img-fluid rounded" alt="profile"/>
    </div>
    <div class=" col-10 col-md-6 align-self-center">
      
      <ProfileCard 
      
      key1='Name : '
      value1={profile.name} 
      key2='Phone : '
      value2={profile.phone} 
      key3='Email :' 
      value3={profile.email} 
      key4='Gender : '
      value4={profile.gender} 
      key5='Age : '
      value5={profile.age} 
      key6='Role : '
      value6={profile.role} 
      key7='Location : '
      value7={profile.location} 
     
      classNameforbutton="card-body d-none"
      >
     </ProfileCard> 
   
    </div>
  </div>
</div>


    
     </>
    )
}