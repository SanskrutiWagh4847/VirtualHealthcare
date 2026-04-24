import React from 'react'


const Cardinfo = (props) => {
    return (
       <>
            <div className="row my-4 justify-content-evenly ">
<div className="col-12 col-md-5 mb-2 "><div className="card p-1"><img src={props.src} className="img-fluid" alt="..."/> <div class="card-body">
<p class="text-start">Start aligned text on all viewport sizes.</p>
  </div></div></div>
<div className="col-12 col-md-5 mb-2"><div className="card p-1"><img src={props.src}  className="img-thumbnail" alt="..."/> <div class="card-body">
  <p class="text-start">Start aligned text on all viewport sizes.</p>
  </div></div></div>


</div>
        
        </>
    )
}

export default Cardinfo
