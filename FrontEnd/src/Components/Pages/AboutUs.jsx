import React from 'react'
import about from '../../Assets/Images/about.gif'
import './css/AboutUs.css'

export default function AboutUs() {
    return (
        <div className="container">
        <div className="container d-flex justify-content-center">
<div class="card w-75 border-0" >
  <img src={about} class="card-img-top p-1 mx-auto d-block" alt="..."/>
  <div class="card-body">
      <div className="row mt-5">
          <div className="col"><h4 class="card-title fw-bold text-center">Our Mission</h4>
    <p class="card-text text-justify">To be a healthcare destination where high-end technology and medical expertise blend with compassionate and personalised care, to meet the health needs of all our patients.</p></div>
          <div className="col">
          <h4 class="card-title fw-bold text-center">Our Vision</h4>
    <p class="card-text">To continue to grow and challenge conventions with our pioneering spirit and forward think-ing leadership while providing exceptional patient care.</p>
          </div>
          {/* <div className="col"></div> */}
          </div>
    </div>
  </div>
</div>

        </div>
    )
}
