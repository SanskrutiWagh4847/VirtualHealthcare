import React from 'react'

const Submit = (props) => {
    return (
        
              <>
            <button disabled={props.disabled} type={props.type} value={props.value} onClick={props.onClick} className={props.className}>{props.title}</button>
        </>
        
    )
}

export default Submit
