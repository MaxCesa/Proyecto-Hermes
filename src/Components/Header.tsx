import React from "react";
import Button from "./Button.tsx";

type Props = {};

function Header({}: Props) {
  return (
    <div className="bg-CPdark p-6 flex flex-wrap justify-between">
      <h1 className="cyberpunk-font text-4xl text-CPyellow cyber-glitch-1">
        Hermes
      </h1>
      <div className="flex">
        <Button className="font-oxanium text-CPyellow border-2 border-CPyellow hover:bg-CPyellow hover:text-CPblack transition-all hover:drop-shadow-lg" />
      </div>
    </div>
  );
}

export default Header;
