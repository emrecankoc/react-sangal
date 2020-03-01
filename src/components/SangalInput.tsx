import * as React from "react";
import { classnames } from "../utils/utility";

export type InputType =
  | "text"
  | "email"
  | "select"
  | "file"
  | "radio"
  | "checkbox"
  | "textarea"
  | "button"
  | "reset"
  | "submit"
  | "date"
  | "datetime-local"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "range"
  | "search"
  | "tel"
  | "url"
  | "week"
  | "password"
  | "datetime"
  | "time"
  | "color";

export interface IInputProps {
  type: InputType;
  value: string | number;
  className?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler;
}

const SangalInput: React.FC<IInputProps> = ({
  type,
  value,
  className,
  placeholder,
  onChange,
  ...attributes
}) => {
  const clsnm = classnames("form-control", className || "");
  if (type === "checkbox") {
    return (
      <input type="checkbox" className="form-check-input position-static" />
    );
  }
  return (
    <input
      type={type}
      className={clsnm}
      placeholder={placeholder || ""}
      value={value}
      onChange={onChange}
      {...attributes}
    />
  );
};

export default SangalInput;
