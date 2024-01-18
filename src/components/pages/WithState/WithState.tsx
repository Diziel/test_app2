import React from "react";
import { CurrencySelection } from "../../UI";

const WithState: React.FC = () => {
  return (
    <div id="home">
      <h1>With Default state (useState)</h1>
      <CurrencySelection />
    </div>
  );
};

export default WithState;
