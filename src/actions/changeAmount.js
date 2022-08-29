const ADD_STOCK = "ADD_STOCK";
const MINUS_STOCK = "MINUS_STOCK";
const CHANGE_STOCK = "CHANGE_STOCK";

export const addAmount = () => {
  return {
    type: ADD_STOCK,
  };
};

export const minusAmount = () => {
  return {
    type: MINUS_STOCK,
  };
};

export const changeAmount = (qty) => {
  return {
    type: CHANGE_STOCK,
    amount: qty,
  };
};
