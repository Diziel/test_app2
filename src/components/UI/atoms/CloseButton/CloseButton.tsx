import React from "react";

import "./CloseButton.scss";

interface ButtonProps {
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, className }) => {
  return (
    <div className={`button ${className}`} onClick={onClick}>
      +
    </div>
  );
};

export default Button;
