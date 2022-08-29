import { createStore, combineReducers } from "redux";
import { stockAmountReducer } from "./reducers/stockAmountReducer";
import { loadStockReducer } from "./reducers/loadStockReducer";
// const reducer = combineReducers({
//   productList: productListReducer, //the variable name that will show on the redux, "productList"
//   productDetails: productDetailReducer,
//   cart: cartReducer,
// });

const reducer = combineReducers({
  stockAmount: stockAmountReducer,
  isLoadingStockData: loadStockReducer,
});

const initialState = {
  stockAmount: 1,
  isLoadingStockData: false,
};
const store = createStore(reducer, initialState);
console.log("My store state is: ", store.getState());
export default store;
