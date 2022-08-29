import React from "react";
import { useSelector } from "react-redux";
// import { addAmount, minusAmount } from "../../actions/changeAmount";
import { useStock } from "../../hooks/useStock";

const BuyStockFn = (props) => {
  const { buy, sell, isLoadingStockdata } = useStock();
  const stockAmount = useSelector((state) => state.stockAmount);

  return (
    <section>
      <header>BuyStockFn:{props.test}</header>
      <button onClick={buy}>+</button>
      {isLoadingStockdata ? (
        <span>Loading...</span>
      ) : (
        <span>{stockAmount}</span>
      )}
      <button onClick={sell}>-</button>
    </section>
  );
};

export default BuyStockFn;
