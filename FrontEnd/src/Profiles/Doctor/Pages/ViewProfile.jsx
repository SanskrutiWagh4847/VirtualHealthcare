import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import ProfileCard from '../../../Components/UI Components/Card/Profilecardd'
import { getUser } from "../../../Redux/Action/DoctorAction/DoctorAction";
import profileEdit from '../../../Assets/Images/profileEdit.gif';
import { viewprofile } from "../File/DoctorViewProfileFile";
export default function ViewProfile(){

    const profile = useSelector((state) => state.Doctor.doctor);
    const id= profile.id
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(id))
      }, [dispatch,id])
    return(
     <>
  <div class="card mb-3  container border-0 bg-transperant" >
  <div class="row g-4 justify-content-center">
    <div class="col-md-6">
      <img src={profileEdit} class="img-fluid rounded" alt="..."/>
    </div>
    <div class="col-md-6 align-self-center">
      <div class="card-body mt-5">
      <ProfileCard 
       key1={viewprofile.doctor_name}
       value1={profile.name} 
       key2={viewprofile.doctor_email} 
       value2={profile.email} 
       key3={viewprofile.doctor_phone}
       value3={profile.phone} 
       key4={viewprofile.doctor_age}
       value4={profile.age} 
       key5={viewprofile.doctor_role}
       value5={profile.role} 
       key6={viewprofile.doctor_location}
       value6={profile.location} 
       key7={viewprofile.doctor_hospital}
       value7={profile.hospital} 
       key8={viewprofile.doctor_speciality}
       value8={profile.speciality} 
       key9={viewprofile.doctor_fee}
       value9={profile.fee} 
     
      classNameforbutton="card-body d-none"
      >
     </ProfileCard> 
      </div>
    </div>
  </div>
</div>

      

    
     </>
    )
}