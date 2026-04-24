import React from 'react'

const Checkbox = (props) => {
    return (
        <div>
            
                <input
                  type={props.type}
                 
                  className={props.classNameInput}
                  value={props.valuechk}
                  onChange={props.onChange}
                />
                <label className={props.classNameLabel}>{props.value}</label>
             
        </div>
    )
}

export default Checkbox
