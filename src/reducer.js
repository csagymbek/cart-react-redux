import { ACTIONS } from "./actions";
import cartItems from "./cart-items";

const initialStore = { cart: cartItems, total: 0, amount: 0 };

export const reducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };
    case ACTIONS.INCREASE:
      return {
        ...state,
        cart: state.cart.map((item) => {
          //   console.log(item);
          if (item.id === payload.id) {
            item = { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
      };
    case ACTIONS.DECREASE:
      let tempCart = state.cart.map((item) => {
        //   console.log(item);
        if (item.id === payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    case ACTIONS.REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== payload.id;
        }),
      };
    case ACTIONS.GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log(cartItem);
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      return { ...state, total, amount };
    case ACTIONS.TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === payload.id) {
            if (payload.toggle === "inc") {
              return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
            }
            if (payload.toggle === "dec") {
              return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
            }
          }
          return cartItem;
        }),
      };
    default:
      return state;
  }
};
