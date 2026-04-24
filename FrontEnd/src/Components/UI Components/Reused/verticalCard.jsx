import React from 'react'

export default function verticalCard(props) {
    return (
        <div className="container">


<div class="card services shadow h-100 p-3 m-2 " >
  <img src={props.img} class="card-img-top rounded" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.content}</p>
    
  </div>
</div>

        </div>
    )
}
