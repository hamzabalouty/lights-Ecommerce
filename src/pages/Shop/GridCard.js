import React, { useState } from "react";
import { shopData } from "../../data";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const GridCard = ({ itemsData }) => {
  const notifyCart = () => {
    toast.success("Added To Cart!", {
      position: toast.POSITION.TOP_Right,
      autoClose: 2000
    });
  };
  const notifyFavorite = () => {
    toast.success("Added To Favorite!", {
      position: toast.POSITION.TOP_Right,
      autoClose: 2000
    });
  };

  return (
    <div className="shop-right-container">
      {itemsData.length >= 1 ? (
        itemsData.map((item) => (
          <div className="shop-right-box">
            <div className="shop-right-box-effect">
              <img src={item.img} alt="shop-img" />
              <div className="shop-right-effect">
                <div className="shop-effect-box">
                  <GrFavorite
                    onClick={notifyFavorite}
                    className="favorite-icon"
                  />
                  <ToastContainer />
                </div>
                <div className="shop-effect-box">
                  <AiOutlineShoppingCart
                    onClick={notifyCart}
                    className="search-icon"
                  />
                  <ToastContainer />
                </div>
              </div>
            </div>
            <p>{item.title}</p>
            <h4>${item.price}</h4>
          </div>
        ))
      ) : (
        <p>there is no items</p>
      )}
    </div>
  );
};

export default GridCard;
