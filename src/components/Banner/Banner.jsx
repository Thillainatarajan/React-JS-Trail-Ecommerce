import React from "react";

const Banner = () => {
  return (
    <div className="home__bannerContainer">
      {/* <img src="assets/images/banner-imgs/banner-img-01.jpg" alt="" /> */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="assets/images/banner-imgs/banner-img-01.jpg"
              class="d-block w-100"
              alt="banner-img-01"
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/banner-imgs/banner-img-02.jpg"
              class="d-block w-100"
              alt="banner-img-02"
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/banner-imgs/banner-img-03.jpg"
              class="d-block w-100"
              alt="banner-img-03"
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/images/banner-imgs/banner-img-04.jpg"
              class="d-block w-100"
              alt="banner-img-04"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
