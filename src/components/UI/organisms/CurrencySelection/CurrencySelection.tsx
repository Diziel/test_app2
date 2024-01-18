import React, { ChangeEvent, useState, useCallback } from "react";

import { Checkbox, CurrencyElement } from "../..";

import "./CurrencySelection.scss";

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

const CurrencySelection: React.FC = () => {
  const [list, setList] = useState<string[]>([]);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const currencyName = event.target.name;

    setList((prevList) => {
      if (prevList.includes(currencyName)) {
        return prevList.filter((name) => name !== currencyName);
      } else {
        return [...prevList, currencyName];
      }
    });
  }, []);

  const handleRemove = useCallback((currencyName: string) => {
    setList((prevList) => prevList.filter((name) => name !== currencyName));
  }, []);

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
            onChange={handleChange}
            checked={list.includes(item)}
            name={item}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrencySelection;
