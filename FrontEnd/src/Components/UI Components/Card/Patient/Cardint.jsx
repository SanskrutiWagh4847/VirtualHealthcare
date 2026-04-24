import React from 'react'
import './recard.css'

const Cardint = (props) => {
    return (
        <div>
            <div className="row justify-content-evenly">
<div className=" col ">
<div className="card  cardbg my-5 p-3">

  <div className="card-body h-70 ">
    <h5 className="card-title fw-bold textcolor">{props.titletop}</h5>
    <p className="card-text  fw-bold textcolor fs-3">{props.titlemiddle}</p>
  </div>
</div>
</div>


</div>

        </div>
    )
}

export default Cardint
