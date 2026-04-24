import React from 'react'


const ButtonLink = (props) => {
    return (
        <div>
              
      
       <button onClick={props.onClick} value={props.value}  className={props.className}>{props.children}</button>
        
        </div>
    )
}

export default ButtonLink
