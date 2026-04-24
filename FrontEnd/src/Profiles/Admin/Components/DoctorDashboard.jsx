import {useEffect} from 'react'
import Card from './Card'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { getPendingDoctors } from '../../../Redux/Action/AdminAction/AdminAction'
import { getAvaiableDoctors, getLeaveDoctors } from '../../../Redux/Action/ReporterAction/ReporterAction'


export default function DashBoardItems() {

    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getPendingDoctors());
        dispatch(getAvaiableDoctors());
        dispatch(getLeaveDoctors());
    }, [dispatch]);

    const PendingDoctors = useSelector(state => state.Admin.pendingDoctors)
    const NoOfDoctorsRequest = PendingDoctors.length

    let NoOfAvailableDoctors;
    const AvailableDoctors = useSelector(state => state.Reporter.avaiableDoctors)
    if(AvailableDoctors){
        NoOfAvailableDoctors = AvailableDoctors.length
    }
    
    let NoOfDoctorsOnLeave;
    const DoctorsOnLeave = useSelector(state => state.Reporter.leaveDoctors)
    if(DoctorsOnLeave){
        NoOfDoctorsOnLeave = DoctorsOnLeave.length
    } 
   


    return (
        <div className="container text-center">
            <div className="row">

                <div className="col">
                    <Card data={NoOfDoctorsRequest} title="Pending requests" button="View More" btnclass="btn btn-light shadow btn-sm" bgcolor='#f9d634' method={() => { history.push('/pendingdoctor') }}></Card>
                </div>

                <div className='col'>
                    <Card data={NoOfAvailableDoctors} title="Available" button="View More" btnclass="btn btn-light shadow btn-sm" bgcolor='#57bb77' method={() => { history.push('/available') }}></Card>
                </div>

                <div className='col'>
                    <Card data={NoOfDoctorsOnLeave} title="On Leave" button="View More" btnclass="btn btn-light shadow btn-sm" bgcolor='#f77b8f' method={() => { history.push('/onleave') }}></Card>
                </div>
            </div>
        </div>
    )
}
