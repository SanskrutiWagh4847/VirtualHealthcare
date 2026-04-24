import React from 'react'
import DoctorOnLeave from '../../Reporter/Pages/LeaveDoctors'
import DashBoardItems from '../Components/DoctorDashboard'
import { useHistory } from 'react-router'
import { doctorsOnLeaveFile } from '../Files/DoctorFile'

export default function DoctorsOnLeave() {

    const history = useHistory();
    return (
        <div className="container text-center">
            <DashBoardItems />
            <h2 className="m-3 text-navy">{doctorsOnLeaveFile.title}</h2>

            <DoctorOnLeave />
            <button  className="btn btn-success round-button" onClick={() =>{history.push('/doctors')}}>{doctorsOnLeaveFile.button_name.backToDashboard}</button>
 
        </div>
    )
}
