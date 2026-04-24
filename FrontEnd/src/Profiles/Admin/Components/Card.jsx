import React from 'react';
import './Admin.css';

export default function Card(props) {


    return (
        <div className="m-2">
        <div className="card border-0 shadow p-2 CardHover dashboard-card" style={{ background:`${props.bgcolor}`}} >
            <div className="card-body  text-center">
                <h4 className="card-title fw-bold text-navy ">{props.title}</h4>
                <h4 className={props.classNameData}>{props.data}</h4>
                <button className={props.btnclass} data-bs-toggle={props.collapscard}  data-bs-target={props.cardtoggle} onClick={props.method}>{props.button}</button>
 
            </div>
        </div>
 
    </div>

    )
}
