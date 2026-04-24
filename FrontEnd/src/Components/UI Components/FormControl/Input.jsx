import React from 'react'

const Input = (props) => {
    return (
        <div className="form-floating">
        
        
        <input
          type={props.type}
          className={props.className}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          onChange={props.onChange}
          readOnly={props.readOnly}
          id="floatingInput"
        />
     <label for="floatingInput">{props.label}</label>
  
        </div>
    )
}

export default Input

