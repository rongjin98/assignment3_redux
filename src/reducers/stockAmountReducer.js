const ADD_STOCK = "ADD_STOCK";
const MINUS_STOCK = "MINUS_STOCK";
const CHANGE_STOCK = "CHANGE_STOCK";

export const stockAmountReducer = (state = 0, action) => {
  // console.log("StockAmount state is: ", state);
  switch (action.type) {
    case ADD_STOCK:
      return state + 1;
    case MINUS_STOCK:
      return state - 1;
    case CHANGE_STOCK:
      return action.amount;
    default:
      return state;
  }
};
