import React from "react";
import { CurrencySelectionRedux } from "../../UI";

const WithRedux: React.FC = () => {
  return (
    <div id="home">
      <h1>With Redux</h1>
      <CurrencySelectionRedux />
    </div>
  );
};

export default WithRedux;
