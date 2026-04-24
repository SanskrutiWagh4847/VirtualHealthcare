import React from 'react'
import Todaysappointment from '../../Reporter/Pages/TodaysAppointments'
import AppointmentDashboard from '../Components/AppointmentDashboard'
import { useHistory } from 'react-router'
export default function TodaysAppointment() {

    const history = useHistory();
    return (
        <div className="container text-center">
                <AppointmentDashboard />
              <div className="mt-4">
              <Todaysappointment />
              </div>
             
              <button  className="btn btn-success round-button mb-5" onClick={() =>{history.push('/dashboard')}}>Back to Dashboard</button>
  
        </div>
    )
}
