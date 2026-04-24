import React from 'react'

export default function PopupCard(props) {
    return (
        <div>
            
      <div className="card mb-3 popupcard notwell">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.img} className="img-fluid px-5 rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body pt-5 ">
        <h1 className="card-title ">{props.Qtitle}</h1>
        <h4 className="card-text   ">{props.title}</h4>
        <div classNameName="px-5 pt-3">
        <p className="card-text text-start">&#x2192;{props.content1}</p>
        <p className="card-text text-start">&#x2192; {props.content2}</p>
        <p className="card-text text-start" >&#x2192; {props.content3}</p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
