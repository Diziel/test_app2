import React, { memo } from "react";
import { CloseButton } from "../..";

import "./CurrencyElement.scss";
import { CurrencyElementProps } from "../../../../types/CurrencyElementTypes";

const CurrencyElement: React.FC<CurrencyElementProps> = memo(
  ({ name, handleRemove, className }) => {
    return (
      <div className={`currency-wrapper ${className}`}>
        <CloseButton
          className="icon"
          onClick={() => handleRemove(name)}
        ></CloseButton>
        {name}
      </div>
    );
  }
);

export default CurrencyElement;
