import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrency, removeCurrency } from "../../../../store/currencySlice";
import { RootState } from "../../../../store/store";

import { Checkbox, CurrencyElement } from "../..";

import "../CurrencySelection/CurrencySelection.scss";

const Currencies: string[] = [
  "EUR",
  "PLN",
  "GEL",
  "DKK",
  "CZK",
  "GBP",
  "SEK",
  "USD",
  "RUB",
];

const CurrencySelectionRedux: React.FC = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.currency.list);

  const handleChange = (currencyName: string) => {
    if (list.includes(currencyName)) {
      dispatch(removeCurrency(currencyName));
    } else {
      dispatch(addCurrency(currencyName));
    }
  };

  const handleRemove = (currencyName: string) => {
    dispatch(removeCurrency(currencyName));
  };

  return (
    <div className="currency-container">
      <div className="currency-list">
        {list.map((name) => (
          <CurrencyElement
            className="grid-item"
            key={name}
            handleRemove={handleRemove}
            name={name}
          />
        ))}
      </div>
      <div className="grid-container">
        {Currencies.map((item) => (
          <Checkbox
            className="grid-item"
            key={item}
            onChange={() => handleChange(item)}
            checked={list.includes(item)}
            name={item}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrencySelectionRedux;
