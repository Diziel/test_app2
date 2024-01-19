import React from "react";

import "./CloseButton.scss";
import { ButtonProps } from "../../../../types/CloseButtonTypes";

const CloseButton: React.FC<ButtonProps> = ({ onClick, className }) => {
  return (
    <div className={`button ${className}`} onClick={onClick}>
      +
    </div>
  );
};

export default CloseButton;
