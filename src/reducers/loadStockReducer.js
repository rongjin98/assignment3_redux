const LOAD_SUCCESS = "LOAD_SUCCESS";
const LOADING = "LOADING";

export const loadStockReducer = (state = false, action) => {
  // console.log("Loading stock state is: ", state);
  switch (action.type) {
    case LOAD_SUCCESS:
      return false;
    case LOADING:
      return true;
    default:
      return state;
  }
};
