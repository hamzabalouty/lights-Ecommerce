import React from "react";
import "./Wishlist.css";
import { BsFillTrashFill } from "react-icons/bs";

const Wishlist = () => {
  return (
    <div className="wishlist">
      <div className="wishlist-title">
        <h4>WISHLIST</h4>
        <p>Home / Wishlist</p>
      </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
          <th>Remove</th>
        </tr>
        <tr>
          <td>
            <img
              src="https://dt-lights.myshopify.com/cdn/shop/products/interior-products_0027_Layer_5_c0bd67e2-ed99-476c-953e-841ae9168cea.jpg?v=1535352367"
              alt="table-img"
            />
          </td>
          <td>
            <p>Bed Lamp Large</p>
          </td>
          <td>
            <p>$217.00</p>
          </td>
          <td>
            <p>1</p>
          </td>
          <td>
            <p>$217.00</p>
          </td>
          <td>
            <button>Add To Cart</button>
          </td>
          <td>
            <BsFillTrashFill className="remove-icon" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Wishlist;
