import React from "react";
import { fetchStockData } from "../api/stock.api";
// import { useSelector, useDispatch } from "react-redux";
import { useCounter } from "./useCounter";
import { useLoading } from "./useLoading";

export const useStock = (init = 0) => {
  // const initAmount = useSelector((state) => state.stockAmount);
  // const initLoad = useSelector((state) => state.isLoadingStockData);

  const [buy, sell, setAmount] = useCounter();
  const [isLoading, startLoading, endLoading] = useLoading(false);
  React.useEffect(() => {
    startLoading();
    fetchStockData()
      .then((data) => {
        setAmount(data.initStockAmount);
        endLoading();
      })
      .catch((err) => {
        endLoading();
      });
  }, []);

  return {
    buy,
    sell,
    isLoadingStockdata: isLoading,
  };
};
