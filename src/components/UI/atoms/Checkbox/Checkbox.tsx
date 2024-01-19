import React from "react";

import "./Checkbox.scss";
import { CheckboxProps } from "../../../../types/CheckboxTypes";

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  onChange,
  checked,
  className,
}) => {
  return (
    <label
      id={name}
      className={`checkbox-wrapper ${className} ${checked ? "checked" : ""}`}
    >
      {name}
      <input
        name={name}
        type="checkbox"
        onChange={(event) => onChange(event)}
        checked={checked}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
