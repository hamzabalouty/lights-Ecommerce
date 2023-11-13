import React from "react";
import "./Collection.css";
import { collectionData } from "../../data";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addToCart } from "../../rtk/slices/cart-slice";
import { addCart } from "../../rtk/slices/favorite-slice";
import { useDispatch, useSelector } from "react-redux";

const Collection = () => {
  const dispatch = useDispatch();

  return (
    <div className="collections">
      <div className="collections-title">
        <h2>LATEST COLLECTION</h2>
      </div>
      <div className="collection-containers">
        <div className="collection-btns">
          <button>Featured Products</button>
          <button>New Products</button>
          <button>Best Sellers</button>
        </div>
        <div className="collection-box-container">
          {collectionData.map((item) => (
            <div className="collection-box">
              <img src={item.img} alt="collection-img" />
              <div className="collection-box-btn">
                <button>
                  <MdOutlineFavoriteBorder
                    onClick={() => dispatch(addCart(item))}
                    className="favorite-icon"
                  />
                </button>
                <button>
                  <AiOutlineShoppingCart
                    onClick={() => dispatch(addToCart(item))}
                    className="cart-icon"
                  />
                </button>
              </div>
              <p>{item.title}</p>
              <h5>${item.price}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
