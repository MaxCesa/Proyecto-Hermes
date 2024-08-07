import React from "react";
import { IconType } from "react-icons";

type IconProps = {
  IconName;
  size?: number;
  className?: string;
  loading?: boolean;
  ping?: boolean;
  reduceOpacityOnHover?: boolean;
  onClick?: () => void;
};

function Icon({
  IconName,
  size = 20,
  className,
  loading,
  ping,
  reduceOpacityOnHover,
  onClick,
}: IconProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`p-3 rounded-full cursor-pointer hover:bg-CPyellow ${
        reduceOpacityOnHover
          ? "hover:bg-opacity-30"
          : "bg-CPyellow text-black border-2 border-white hover:drop-shadow-lg"
      } ${loading && "cursor-wait"} ${className}`}
    >
      ${loading ? "Cargando" : <IconName size={size} />}$
      {ping && (
        <>
          <span className="absolute -top-1 left-7 w-3 h-3 border-2 border-CPred rounded-full bg-red-800"></span>
          <span className="animate-ping absolute -top-1 left-7 w-3 h-3 border-CPred rounded-full bg-red-800"></span>
        </>
      )}
    </button>
  );
}

export default Icon;
