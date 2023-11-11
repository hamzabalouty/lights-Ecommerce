import React from "react";
import "./Collection.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const Collection = () => {
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
          <div className="collection-box">
            <img src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0011_Layer_23_d62b2ddf-017c-4b57-a240-135bb9ee607a_600x.jpg?v=1535355702" />
            <div className="collection-box-btn">
              <button>
                <MdOutlineFavoriteBorder className="favorite-icon" />
              </button>
              <button>
                <AiOutlineSearch className="favorite-icon" />
              </button>
            </div>
            <p>color paper lamp</p>
            <h5>$319.00</h5>
          </div>
          <div className="collection-box">
            <img src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0005_Layer_27_34d03e1f-09d8-4bab-90ca-d273f49ab1a5_600x.jpg?v=1535353637" />
            <div className="collection-box-btn">
              <button>
                <MdOutlineFavoriteBorder className="favorite-icon" />
              </button>
              <button>
                <AiOutlineSearch className="favorite-icon" />
              </button>
            </div>
            <p>color paper lamp</p>
            <h5>$319.00</h5>
          </div>
          <div className="collection-box">
            <img src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0026_Layer_6_170aca74-d7da-4416-a015-d77dc66dd067_600x.jpg?v=1535352653" />
            <div className="collection-box-btn">
              <button>
                <MdOutlineFavoriteBorder className="favorite-icon" />
              </button>
              <button>
                <AiOutlineSearch className="favorite-icon" />
              </button>
            </div>
            <p>color paper lamp</p>
            <h5>$319.00</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
