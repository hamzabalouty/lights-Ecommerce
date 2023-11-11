import React from "react";
import "./Arrivals.css";
import { Link } from "react-router-dom";
import { arrivalsData } from "../../data";

const Arrivals = () => {
  return (
    <div className="arrivals">
      <div className="arrivals-container">
        <div className="arrivals-left">
          <img
            src="https://dt-lights.myshopify.com/cdn/shop/files/img-6_470x.jpg?v=1614288872"
            alt="arrivals-img"
          />
        </div>
        <div className="arrivals-right">
          {arrivalsData.map((item) => (
            <div className="arrivals-box">
              <Link to={`/product/${item.id}`}>
                <img src={item.img} alt="arrivals-img" />
              </Link>
              <div className="arrival-box-content">
                <Link to={`/product/${item.id}`}>
                  <h5>{item.title}</h5>
                </Link>
                <h4>${item.price}</h4>
                <button>Add to Wishlist</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
