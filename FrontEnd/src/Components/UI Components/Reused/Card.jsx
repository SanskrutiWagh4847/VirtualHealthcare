import React from 'react'

export default function Card(props) {
    return (
        <div>
    <div className="card container border-0 mb-3">
  <div className="row g-0">
    <div className="col-md-4">
    <img src={props.img} className="container symptm-img" alt="..." />
    </div>
    <div className="col-md-8  align-self-center">
      <div className="card-body">
      <h3 className="card-title h3 alert"><span className="numberCircle">{props.no}</span>{props.title}</h3>
        <p className="h5">
        {props.info}
        </p>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
