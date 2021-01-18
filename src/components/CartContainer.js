import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { ACTIONS } from "../actions";

const CartContainer = ({ total, cart = [], dispatch }) => {
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_TOTALS });
  }, [cart, dispatch]);

  // console.log(cart);

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch({ type: ACTIONS.CLEAR_CART })}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = ({ cart, total }) => {
  return { total, cart };
};

export default connect(mapStateToProps)(CartContainer);
