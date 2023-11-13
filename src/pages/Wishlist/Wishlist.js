import React, { useEffect } from "react";
import "./Wishlist.css";
import { BsFillTrashFill } from "react-icons/bs";
import { addToCart } from "../../rtk/slices/cart-slice";
import { deleteCart } from "../../rtk/slices/favorite-slice";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        {favorite.length > 0 ? (
          favorite.map((item) => (
            <tr>
              <td>
                <img src={item.img} alt="table-img" />
              </td>
              <td>
                <p>{item.title}</p>
              </td>
              <td>
                <p>${item.price}</p>
              </td>
              <td>
                <p>{item.quantity}</p>
              </td>
              <td>
                <p>${item.quantity * item.price}</p>
              </td>
              <td>
                <button onClick={() => dispatch(addToCart(item))}>
                  Add To Cart
                </button>
              </td>
              <td>
                <BsFillTrashFill
                  onClick={() => dispatch(deleteCart(item))}
                  className="remove-icon"
                />
              </td>
            </tr>
          ))
        ) : (
          <p className="no-product-para">
            No products were added to the wishlist
          </p>
        )}
      </table>
    </div>
  );
};

export default Wishlist;
