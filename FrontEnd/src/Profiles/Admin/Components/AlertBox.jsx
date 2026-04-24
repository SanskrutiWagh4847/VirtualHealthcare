import React from 'react'

export default function AlertBox(props) {
    return (
        <div className="container">
          <div className="alert   alert-info p-3" role="alert">
          <button
            type="button"
            className="btn-close mb-2 position-absolute top-0 end-0"
            onClick={props.onClick}
             
          > </button>
         <strong className="text-danger">{props.notifications}</strong>
        </div>
        </div>
    )
}





