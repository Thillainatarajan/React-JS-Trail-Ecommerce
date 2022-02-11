import React from "react";
import Header from "../../components/Header/Header";
import "./Checkout.css";

import { useSelector } from "react-redux";
import CheckoutProduct from "../../components/checkoutProduct/CheckoutProduct";
import SubTotal from "../../components/SubTotal/SubTotal";

const Checkout = () => {
  const { basket, user } = useSelector((state) => state.data);
  return (
    <div className="checkout">
      <Header />
      <div className="page-container">
        <div className="checkout-left">
          <img
            className="checkout-ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
            alt=""
          />
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout-title">
              {basket.length === 0
                ? "Your Shopping Basket is Empty"
                : "Your Shopping Basket"}
            </h2>
            <div className="checkout-prod-list">
              {basket &&
                basket.map((item) => (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="checkout-right">
          <div className="sub-total-section">
            <SubTotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
