import {CanvasJSChart} from 'canvasjs-react-charts';
import { useDispatch, useSelector } from "react-redux";
import { getAvaiableDoctors,getLeaveDoctors} from "../../../Redux/Action/ReporterAction/ReporterAction";
import { useEffect} from "react";
import Spinner from "../../../Components/UI Components/Spinner/Spinner";


export default function CanvasChart(){

    const dispatch = useDispatch();
    const Available = useSelector((state) => state.Reporter.avaiableDoctors);
    const Leave = useSelector((state) => state.Reporter.leaveDoctors);
    const leave=Leave.length;
    const available=Available.length;
    const total =leave+available;
    let loading=true;

    const leavePer=(leave/total)*(100)
    const availablePer=(available/total)*(100)

    if(leavePer && availablePer) loading=false;


    useEffect(() => {
        dispatch(getAvaiableDoctors());
        dispatch(getLeaveDoctors());
        }, [dispatch]);


    const options = {
        exportEnabled: true,
        theme: "dark2",
        animationEnabled: true,
        title: {
            text: "STATUS ANALYSIS",
            color: "#ff6666"
        },
        data: [{
            type: "pie",
            startAngle: 140,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 13,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: availablePer, label: "Available ", color: "#b3ff1a" },
                { y: leavePer, label: "On Leave" ,color: ' #ff6666'}
            ]
        }]
    }


    return(
        <div className="row justify-content-center ">
          
            <div className="col col-lg-8 shadow p-3 mb-2 bg-body rounded pie">
              {loading ? <Spinner></Spinner> : <CanvasJSChart options={options} />}
              
            </div>
          
          </div>

    )
}