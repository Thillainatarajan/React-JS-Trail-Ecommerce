import React from "react";
import "./checkoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useDispatch } from "react-redux";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { removeFromBasket } from "../../redux/action";

const CheckoutProduct = ({ id, title, image, rating, price }) => {
  let dispatch = useDispatch();

  const removeItemFromBasket = () => {
    console.log(id);
    dispatch(removeFromBasket(id));
  };

  return (
    <div className="checkout-product">
      <img src={image} alt="" className="checkout-product-image" />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <strong>$</strong>
          <strong>{price}</strong>
          <p>.00</p>
        </p>
        <div className="checkout-product-rating">
          <div className="product__productInfo__productRating mb-2">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
          </div>
        </div>
        <div className="removeitem-btn">
          <button onClick={removeItemFromBasket}>
            <i>
              <ShoppingBasketIcon />
            </i>
            Remove from Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
