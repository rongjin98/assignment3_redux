import React from "react";
import { useDispatch } from "react-redux";
import { addAmount, minusAmount, changeAmount } from "../actions/changeAmount";

export const useCounter = () => {
  const dispatch = useDispatch();

  const hanldeInc = (e) => {
    dispatch(addAmount());
  };
  const hanldeDec = () => {
    dispatch(minusAmount());
  };

  const handleChange = (qty) => {
    dispatch(changeAmount(qty));
  };

  //   const handleSetCounter = (newCounter) => {
  //     setCounter(newCounter);
  //   };
  return [hanldeInc, hanldeDec, handleChange];
};
