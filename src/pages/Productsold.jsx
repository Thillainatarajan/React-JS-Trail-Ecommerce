import React, { useState, useEffect } from "react";
import "../styles/components/Product.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Skeleton } from "@mui/material";

const Product = ({ id, title, price, rating, prodImage }) => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3">
          <Skeleton height={400} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3">
                <div className="h-100 text-center product" key={product.id}>
                  <div className="product__productInfo">
                    <div className="product__productInfo__producttitle mb-2">
                      {product.title}
                    </div>
                    <div className="product__productInfo__productPrice mb-2">
                      <small className="priceSymbol">₹</small>
                      <strong className="priceValue">{product.price}</strong>
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
                    <img
                      src={product.image}
                      class="d-block w-100"
                      alt={product.title}
                    />
                  </div>
                  <div className="product__add2cartBtnSec text-center">
                    <button className="add2cartBtn" type="">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return <>{loading ? <Loading /> : <ShowProducts />}</>;
};

export default Product;
