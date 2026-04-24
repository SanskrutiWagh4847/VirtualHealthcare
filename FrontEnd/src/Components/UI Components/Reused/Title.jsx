import React from 'react'

export default function Title(props) {
    return (
        <div className="text-center">
            <h3 className="alert">{props.title}</h3>
        <p>
        {props.content}
        </p>
        </div>
    )
}
