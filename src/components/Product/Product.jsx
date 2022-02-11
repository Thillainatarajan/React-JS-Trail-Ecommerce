import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/action";

const Product = ({
  id,
  title,
  price,
  image,
  rating,
  specification,
  details,
}) => {
  const dispatch = useDispatch();

  const onAddItemToBasket = () => {
    const item = {
      id,
      title,
      price,
      image,
      rating,
      specification,
      details,
    };
    dispatch(addToBasket(item));
  };

  return (
    <div className="product" key={Product.id}>
      <div className="product__productInfo">
        <Link to={`./product/${id}`} className="producttitle">
          <div className="product__productInfo__producttitle mb-2">{title}</div>
        </Link>

        <div className="product__productInfo__productPrice mb-2">
          <small className="priceSymbol">₹</small>
          <strong className="priceValue">{price}</strong>
          <span className="digitValue">.00</span>
        </div>
        <div className="product__productInfo__productRating mb-2">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />
        </div>
      </div>
      <div className="product__productImg">
        <img src={image} class="d-block w-100" alt={title} />
      </div>
      <div className="product__add2cartBtnSec text-center">
        <button className="add2cartBtn" type="" onClick={onAddItemToBasket}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
