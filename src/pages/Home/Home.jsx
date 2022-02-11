import React from "react";
import "./Home.css";

import { headerItems, products } from "../../utils/ProductsData";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Product from "../../components/Product/Product";
import Back2Top from "../../components/Back2Top/Back2Top";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="page-container">
        <div className="productListMenu">
          {headerItems &&
            headerItems.map((item, index) => (
              <a>
                <p>{item}</p>
              </a>
            ))}
        </div>
        <Banner />
        <div className="home-product-row">
          {products.slice(0.6).map((item) => (
            <Product
              key={item.key}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail}
            />
          ))}
        </div>

        <div className="back2top-sec">
          <Back2Top />
        </div>
      </div>
    </div>
  );
};

export default Home;
