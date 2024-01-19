import React from "react";
import { CurrencySelection } from "../../UI";

const WithState: React.FC = () => {
  return (
    <div id="content">
      <h1>With Default state (useState)</h1>
      <CurrencySelection />
    </div>
  );
};

export default WithState;
