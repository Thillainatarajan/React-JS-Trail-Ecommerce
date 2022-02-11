import React, { useEffect } from "react";
import "./App.css";
import "../src/styles/style.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
import { setuser } from "./redux/action";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KRIKASJsZCaSIWJtXcZtHpf47ckB3P4nSEFb2idwdFFzkMz51Z7Fur7JLOVfSjUwv7OL3eryz4tJWUYsJHOGgnd00FxvpO91o"
);

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser));
      } else {
        dispatch(setuser(null));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/Product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                {" "}
                <Payment />
              </Elements>
            }
          />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
