import React from 'react'
import '../../../../Profiles/Patient/Components/Css/Patient.css'
import './recard.css'
const OneButtoncard = (props) => {
    return (
        <>
        <div className="col-lg-4 mb-4 ">
        <div className="card h-100 gradcard ">
      <div className="card-body">
        <h5 className="card-title fw-bolder textcol fs-5 ">{props.titlecard}</h5>
        <p className="card-text text-muted fw-normal">{props.textcard}</p>
      
      </div>
    </div>
    </div>
            
        </>
    )
}

export default OneButtoncard
