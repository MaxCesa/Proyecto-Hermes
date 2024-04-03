import React from "react";

type InputProps = {
  name: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
  className?: string;
  onKeyDown?: (e: any) => void;
  disabled?: boolean;
};

const Input = (props: InputProps) => {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
      onKeyDown={props.onKeyDown}
      type={props.type}
      placeholder={"Ingrese " + props.name}
      className={props.className}
    />
  );
};

export default Input;
