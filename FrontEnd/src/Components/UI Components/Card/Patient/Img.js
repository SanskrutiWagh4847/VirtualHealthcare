import React from 'react'

const Img = (props) => {
    return (
        <div>




               <div className="row my-4 justify-content-evenly ">
<div className="col-12 col-md-5 mb-2 ">

<div class="card" style={{width:"18 rem"}}>
  <img src={props.src} class="card-img-top w-50 h-100" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>





</div>
<div className="col-12 col-md-5 mb-2"><div className="card p-1"><img src={props.src}  className="img-thumbnail d-block m-3 " alt="..."/> <div class="card-body">
  <p class="text-start">Start aligned text on all viewport sizes.</p>
  </div></div></div>


</div>
        </div>
    )
}

export default Img
