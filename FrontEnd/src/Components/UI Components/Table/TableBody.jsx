


export default function Table(props){
  let isAppointmentTable=props.isappointmentTable;
  let isDoctorsTable=props.isDoctorsTable;
    return(
        <tr key={props.key} className={props.tableClass} data-test="table-body">
        <th scope="row">{props.no}</th>
        <td className={props.idClass}>{props.id}</td>
        <td className={props.nameClass}>{props.name}</td>
        {!isDoctorsTable &&<td className={props.patientnameClass}>{props.patientname}</td>}
        {!isDoctorsTable &&<td className={props.timeClass}>{props.time}</td>}
        {!isDoctorsTable &&<td className={props.statusClass}>{props.status}</td>}
        {!isAppointmentTable && <td className={props.emailClass}>{props.email}</td>}
        {!isAppointmentTable &&<td className={props.phoneClass}>{props.phone}</td>}

        <td>
          <button
            className={props.buttonClass}
            type="button"
            onClick={props.onClick}
            value={props.id}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            {props.buttontitle}
          </button>
        </td>
      </tr>

    );
}