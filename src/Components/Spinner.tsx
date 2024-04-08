import React from "react";

type Props = {};

function Spinner({}: Props) {
  return (
    <div className="border-2 border-t-CPblack animate-spin h-5 w-5 rounded-full"></div>
  );
}

export default Spinner;
