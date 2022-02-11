import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useSelector, useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "../../components/checkoutProduct/CheckoutProduct";
import { getBasketTotal } from "../../utils/BasketTotal";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../utils/firebase";
import Header from "../../components/Header/Header";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { async } from "@firebase/util";

const Payment = () => {
  const { basket, user } = useSelector((state) => state.data);

  let history = useNavigate();
  let dispatch = useDispatch();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSceret = async () => {
      const responce = await axios({
        method: "POST",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(responce.data.clientSecret);
    };
    getClientSceret();
  }, [basket]);

  const stripe = useStripe();
  const elements = useElements();

  const handlesubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user && user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <Header />
      <div className="page-container">
        <div className="payment-container">
          <h1> Checkout {<Link to="/checkout">{basket.length} Items</Link>}</h1>
          <div className="payment-section">
            <div className="payment-title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment-address">
              <p>{user && user.email}</p>
              <p>
                House # 9A, Next Gomathi School, Annupanadi, Teachers Colony
              </p>
              <p>Madurai, Tamilnadu, India.</p>
            </div>
          </div>
          <div className="payment-section">
            <div className="payment-title">
              <h3>Review items and Delivery</h3>
            </div>
            <div className="payment-items">
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
          <div className="payment-section">
            <div className="payment-title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment-details">
              <from onSubmit={handlesubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment-priceContiner">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3>Order Total : {value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </from>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
