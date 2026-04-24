import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getApprovedDoctors, getPatients, getQuries } from '../../../Redux/Action/AdminAction/AdminAction'
import { getTodayAppointments } from '../../../Redux/Action/ReporterAction/ReporterAction'
import Card from '../Components/Card'
import { useHistory } from 'react-router'
import AdminImage from '../../../Assets/Images/AdminDashboard.gif'


export default function ShowAllData() {

    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        dispatch(getApprovedDoctors());
        dispatch(getPatients());
        dispatch(getTodayAppointments());
        dispatch(getQuries());
    }, [dispatch]);

    const Patient = useSelector(state => state.Admin.patients);
    const NoOfPatient = Patient.length

    const ApprovedDoctors = useSelector(state => state.Admin.approvedDoctors)
    const NoOfDoctors = ApprovedDoctors.length

    
    const TodaysAppointment = useSelector(state => state.Reporter.todayappointments)
    let NoOfTodaysAppointment;
    if(TodaysAppointment){
     NoOfTodaysAppointment = TodaysAppointment.length
    }
   

    const Inquiries = useSelector(state => state.Admin.queries);
    const NoOfQuries = Inquiries.length




    return (

        <div className=" container text-center mt-5 bg-transparent">

            <div class="card  bg-transparent mb-3 border-0">
                <div class="row g-0">
                    <div class="col-10 col-md-4">
                        <img src={AdminImage} className="img-fluid" alt="..." />
                    </div>

                    <div class="col-10 col-md-8">
                        <div class="card-body">

                            <div className="row g-2">
                                <div className="col p-2 ">
                                    <div className="text-center">
                                        <Card data={NoOfPatient} title="Patients" button="View More" btnclass="btn btn-light shadow btn-sm" bgcolor='#f9d634' style={{ width: "20rem" }} method={() => { history.push('/patients') }}></Card>
                                    </div>
                                </div>
                                <div className="col p-2">
                                    <div className="text-center" >
                                        <Card data={NoOfDoctors} classNameData="text-muted" title="Doctors" button="View More" btnclass="btn btn-light shadow btn-sm" bgcolor='#64c1df' method={() => { history.push('/doctors') }}></Card>
                                    </div>
                                </div>
                                <div className="row g-2">


                                    <div className="col p-2">
                                        <div className="text-center">
                                            <Card data={NoOfTodaysAppointment} title="Appointments" button="View More" btnclass="btn btn-light shadow btn-sm" bgcolor='#feaab9' method={() => { history.push('/todays') }}></Card>

                                        </div>
                                    </div>
                                    <div className="col p-2">
                                        <div className="text-center">
                                            <Card data={NoOfQuries} title="Inquiries" button="View More" btnclass="btn btn-light shadow btn-sm" bgcolor='#ccb0f0' method={() => { history.push('/viewqueries') }}></Card>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
