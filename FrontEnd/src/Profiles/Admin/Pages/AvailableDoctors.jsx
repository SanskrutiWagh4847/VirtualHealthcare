import React from 'react'
import AvailableDoctor from '../../Reporter/Pages/AvailableDoctors'
import DashBoardItems from '../Components/DoctorDashboard'
import { useHistory } from 'react-router';
import { availableDoctorsFile } from '../Files/DoctorFile';

export default function AvailableDoctors() {

    const history = useHistory();
    return (
        <div className="container text-center">
            <DashBoardItems />
             <h2 className="m-4 text-navy">{availableDoctorsFile.title}</h2>
            <AvailableDoctor />
            <button  className="btn btn-success round-button m-3" onClick={() =>{history.push('/doctors')}}>{availableDoctorsFile.button_name.backToDashboard}</button>
 
        </div>
    )
}
