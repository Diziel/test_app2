import React, { ChangeEvent } from "react";

import "./Checkbox.scss";

interface CheckboxProps {
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  className?: string;
}

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
