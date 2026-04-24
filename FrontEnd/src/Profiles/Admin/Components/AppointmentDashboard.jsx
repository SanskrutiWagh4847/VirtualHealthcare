import React from 'react'
import Card from './Card'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getUpcomingAppointments, getAppointmentsHistory } from '../../../Redux/Action/AdminAction/AdminAction'
import { getTodayAppointments} from '../../../Redux/Action/ReporterAction/ReporterAction'


export default function DashBoardItems() {

    const history = useHistory();
    const dispatch = useDispatch();
    

    useEffect(() => {
       dispatch(getTodayAppointments());
       dispatch(getUpcomingAppointments());
       dispatch(getAppointmentsHistory());
    }, [dispatch]);

    const TodaysAppointment = useSelector(state => state.Reporter.todayappointments)
    let NoOfTodaysAppointment;
    if(TodaysAppointment){
        NoOfTodaysAppointment = TodaysAppointment.length
    }
     

    const UpcomingAppointments = useSelector(state => state.Admin.upcomingAppointments)
    const NoOfUpcomingAppointments = UpcomingAppointments.length

    const AppointmentHistory = useSelector(state => state.Admin.appointmentHistory)
    const NoOfAppointmentHistory = AppointmentHistory.length


    return (
        <div className="container text-center">
            <div className="row">

            <div className='col'>
                    <Card data={NoOfUpcomingAppointments} title="Upcoming" button="View More" btnclass="btn btn-light shadow btn-sm" bgcolor='#f9d634' method={() => { history.push('/upcoming') }}></Card>
                </div>

                <div className="col">
                    <Card data={NoOfTodaysAppointment} title="Today's" button="View More" btnclass="btn btn-light shadow btn-sm" bgcolor='#57bb77' method={() => { history.push('/todays') }}></Card>
                </div>


                <div className='col'>
                    <Card data={NoOfAppointmentHistory} title="History" button="View More" btnclass="btn btn-light shadow btn-sm" bgcolor='#f77b8f' method={() => { history.push('/history') }}></Card>
                </div>
            </div>
        </div>
    )
}
