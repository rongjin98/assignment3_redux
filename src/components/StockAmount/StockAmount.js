import { useStock } from "../../hooks/useStock";
import React from "react";
import { useSelector } from "react-redux";
const StockAmount = () => {
  const { isLoadingStockdata } = useStock();
  const stockAmount = useSelector((state) => state.stockAmount);
  return <span>{isLoadingStockdata ? "..." : stockAmount}</span>;
};

export default StockAmount;
