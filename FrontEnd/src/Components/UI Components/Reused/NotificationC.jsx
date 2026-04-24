import React from 'react'

import './Notification.css'
const NotificationC = (props) => {
    return (
        <div>
            <div className="modal" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title"> <img className="modalimg" src="" alt="" />Smart Covid Clinic</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p> NOTIFICATION FROM SMART COVID CLINIC</p>
        <p>{props.notificationmsg}</p>
      </div>
      <div className="modal-footer">
        <button 
        type="button"
         className="btn btn-secondary" 
         data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default NotificationC
