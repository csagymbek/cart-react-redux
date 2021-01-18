export const ACTIONS = {
  DECREASE: "DECREASE",
  INCREASE: "INCREASE",
  REMOVE: "REMOVE",
  GET_TOTALS: "GET_TOTALS",
  TOGGLE_AMOUNT: "TOGGLE_AMOUNT",
  CLEAR_CART: "CLEAR_CART",
};

export const removeItem = (id) => {
  return { type: ACTIONS.REMOVE, payload: id };
};
