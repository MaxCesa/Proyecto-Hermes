import React from "react";
import Button from "./Button.tsx";
import Icon from "./Icon.tsx";
import MdChatBubble from "react-icons";
import FaList from "react-icons";
import UserHeaderProfile from "./UserHeaderProfile.tsx";

type Props = {};

function Header({}: Props) {
  return (
    <div className="bg-CPdark p-6 flex flex-wrap justify-between">
      <h1 className="cyberpunk-font text-4xl text-CPyellow cyber-glitch-1">
        Hermes
      </h1>
      <div className="flex flex-row-reverse md:flex-row items-center justify-center gap-5 flex-wrap">
        <Button className="font-oxanium text-CPyellow border-2 border-CPyellow hover:bg-CPyellow hover:text-CPblack transition-all hover:drop-shadow-lg" />
        <Icon IconName={MdChatBubble} ping={true} />
        <Icon IconName={FaList} reduceOpacityOnHover={false} />
        <UserHeaderProfile />
      </div>
    </div>
  );
}

export default Header;
