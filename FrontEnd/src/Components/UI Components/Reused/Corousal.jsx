import React from "react";

export default function Corousal(props) {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div class="card border-0 bg-transperant  mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={props.img1} className=" w-100" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 className="alert">{props.heading}</h3>
                    <h1 className="span1">{props.title1}</h1>
                    <span>{props.info1}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
          <div class="card border-0 bg-transperant w-100  mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={props.img2} className=" w-100" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 className="alert">{props.heading}</h3>
                    <h1 className="span1">{props.title2}</h1>
                    <span>{props.info2}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div class="card border-0 bg-transperant  mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={props.img3} className=" w-100" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 className="alert">{props.heading}</h3>
                    <h1 className="span1">{props.title3}</h1>
                    <span>{props.info3}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
