import React from 'react'

const Layout = (props) => {
    return (
        <div className=" container  justify-content-center shadow-lg p-3 mb-5 mt-4 bg-body rounded  px-3"  style={props.style}>
        {props.children}
      </div>
    )
}

export default Layout

