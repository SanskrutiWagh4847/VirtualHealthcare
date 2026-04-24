import '../../../Profiles/Reporter/Components/Reporter.css'

export default function TableHead (props){

  let isAppointmentTable=props.isappointmentTable;
  let isDoctorsTable=props.isDoctorsTable;
    return(
        <table className="table tablesheet " data-test="Table-testing">
        <thead>
          <tr className="tableheadind">
            <th scope="col">{props.no}</th>
            <th scope="col" className={props.idClass}>{props.id}</th>
            <th scope="col" className={props.nameClass}>{props.name}</th>
            {!isDoctorsTable &&<th scope="col">{props.patientname}</th>}
            {!isDoctorsTable &&<th scope="col">{props.time}</th>}
            {!isDoctorsTable &&<th scope="col">{props.status}</th>}
            {!isAppointmentTable &&<th className={props.emailClass} scope="col">{props.email}</th>}
            {!isAppointmentTable &&<th className={props.phoneClass} scope="col">{props.phone}</th>}
            <th>{props.ButtonTitle}</th>
          </tr>
        </thead>
        <tbody>{props.tableBody}</tbody>
      </table>
    );
}