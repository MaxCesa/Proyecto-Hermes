import React from "react";
import Spinner from "./Spinner.tsx";

type Props = {
  text?: string;
  className?: string;
  secondary?: boolean;
  onClick?: () => void;
  loading?: boolean;
};

function Button({
  className,
  secondary,
  text = "Button Placeholder",
  onClick,
  loading = false,
}: Props) {
  return (
    <button
      className={`flex justify-center gap-3 p-3 ${className}`}
      onClick={onClick}
    >
      {loading && <Spinner />}
      {text}
    </button>
  );
}

export default Button;
