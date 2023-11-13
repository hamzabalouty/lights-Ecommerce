import React, { useEffect } from "react";
import "./Cart.css";
import { BsFillTrashFill } from "react-icons/bs";
import { addToCart, deleteFromCart } from "../../rtk/slices/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart">
      <div className="cart-title">
        <h4>Cart</h4>
        <p>Home / Cart</p>
      </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
        {cart.length > 0 ? (
          cart.map((item) => (
            <>
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
                  <BsFillTrashFill
                    onClick={() => dispatch(deleteFromCart(item))}
                    className="remove-icon"
                  />
                </td>
              </tr>
            </>
          ))
        ) : (
          <p className="no-product-para">No products were added to the Cart</p>
        )}
        <tr>
          <td>
            <p>Subtotal</p>
          </td>
          <td colSpan="5">
            <p>${totalPrice}</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Cart;
