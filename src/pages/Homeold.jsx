import React from "react";
import Product from "../components/Product";
import "../styles/pages/Home.css";

const Home = () => {
  return (
    <div className="home">
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
            {/* <div class="carousel-item">
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
            </div> */}
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
      {/* <div className="home__productSec">
        <div className="productSec__row">
          <Product />
        </div>
        <div className="productSec__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="productSec__row">
          <Product />
        </div>
      </div> */}
      <div className="home__productSec">
        <div className="productSec-01">
          <div class="row product-item">
            <Product />
            <Product />
          </div>
        </div>
        <div className="productSec-02">
          <div class="row product-item">
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        <div className="productSec-03 mb-5">
          <div class="row product-item">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import Product from "../components/Product";
// import "../styles/pages/Home.css";

// function Home() {
//   return (
//     <div className="home">
//       <div className="home__bannerContainer">
//         {/* <img src="assets/images/banner-imgs/banner-img-01.jpg" alt="" /> */}
//         <div
//           id="carouselExampleIndicators"
//           class="carousel slide"
//           data-ride="carousel"
//         >
//           <ol class="carousel-indicators">
//             <li
//               data-target="#carouselExampleIndicators"
//               data-slide-to="0"
//               class="active"
//             ></li>
//             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//           </ol>
//           <div class="carousel-inner">
//             <div class="carousel-item active">
//               <img
//                 src="assets/images/banner-imgs/banner-img-01.jpg"
//                 class="d-block w-100"
//                 alt="banner-img-01"
//               />
//             </div>
//             <div class="carousel-item">
//               <img
//                 src="assets/images/banner-imgs/banner-img-02.jpg"
//                 class="d-block w-100"
//                 alt="banner-img-02"
//               />
//             </div>
//             <div class="carousel-item">
//               <img
//                 src="assets/images/banner-imgs/banner-img-03.jpg"
//                 class="d-block w-100"
//                 alt="banner-img-03"
//               />
//             </div>
//             <div class="carousel-item">
//               <img
//                 src="assets/images/banner-imgs/banner-img-04.jpg"
//                 class="d-block w-100"
//                 alt="banner-img-04"
//               />
//             </div>
//           </div>
//           <button
//             class="carousel-control-prev"
//             type="button"
//             data-target="#carouselExampleIndicators"
//             data-slide="prev"
//           >
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="sr-only">Previous</span>
//           </button>
//           <button
//             class="carousel-control-next"
//             type="button"
//             data-target="#carouselExampleIndicators"
//             data-slide="next"
//           >
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="sr-only">Next</span>
//           </button>
//         </div>
//       </div>
//       <div className="home__productSec">
//         <div className="productSec__row">
//           <Product
//             title="Lukzer 1 PC Protective Insulated Ironing Mesh for Clothes Delicate
//             Garment Cloth Guard Home Press Mat Heat Resistant Reusable & Washable
//             (40 x 60 cm)"
//             price={154}
//             prodImage={
//               // <img
//               //   src="assets/images/product-imgs/product-img-01.jpg"
//               //   class="d-block w-100"
//               //   alt="banner-img-01"
//               // />
//               "https://images-eu.ssl-images-amazon.com/images/I/514mCQ2Pa0L._SX300_SY300_QL70_FMwebp_.jpg"
//             }
//           />

//           <Product />
//         </div>
//         <div className="productSec__row">
//           <Product />
//           <Product />
//           <Product />
//         </div>
//         <div className="productSec__row">
//           <Product />
//         </div>
//       </div>
//       {/* <div className="home__productSec">
//         <div className="productSec-01">
//           <div class="row">
//             <div class="product-item col">
//               <Product />
//             </div>
//             <div class="product-item col">2 of 2</div>
//           </div>
//         </div>
//         <div className="productSec-02">
//           <div class="row">
//             <div class="product-item col">1 of 2</div>
//             <div class="product-item col">2 of 2</div>
//             <div class="product-item col">3 of 3</div>
//           </div>
//         </div>
//         <div className="productSec-03">
//           <div class="row">
//             <div class="product-item col">1 of 2</div>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }

// export default Home;
